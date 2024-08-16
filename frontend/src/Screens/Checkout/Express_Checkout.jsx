import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import Aiyana from '../../images/Rectangle 23.svg';
import Header from '../../components/header/Header';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { firestore } from '../../firebase/firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import axios from 'axios';
import { RxCross2 } from 'react-icons/rx';
import successImg from '../../images/successTick.webp';
import './Checkout.css';
import { MdOutlineFileCopy } from 'react-icons/md';

const ExpressCheckout = () => {
  const [loading, setLoading] = useState(false);
  const [razLoading, setRazLoading] = useState(false);
  const [payPalLoading, setPayPalLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [invalidCoupon, setInvalidCoupon] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [coursePrice, setCoursePrice] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [showPayPopUp, setShowPayPopUp] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email || '');
        setPhone(user.phoneNumber || '');
      } else {
        setEmail('');
        setName('');
        setPhone('');
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/validate-coupon`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ scholarshipCode: coupon }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        setDiscount(data.discount / 100);
        setCouponApplied(true);
        setInvalidCoupon(false);
        toast.success('Coupon applied successfully!');
      } else {
        setDiscount(0);
        setInvalidCoupon(true);
        toast.error('Invalid coupon code.');
        setTimeout(() => {
          setInvalidCoupon(false);
        }, 1000);
      }
    } catch (error) {
      setInvalidCoupon(true);
      setCouponApplied(false);
      toast.error('Something went wrong. Please try again later.');
      console.error(error);
    }
  };

  const validateInputs = () => {
    if (!email) {
      toast.error('Email is required.');
      return false;
    }
    if (!name) {
      toast.error('Name is required.');
      return false;
    }
    if (!phone) {
      toast.error('Phone number is required.');
      return false;
    }
    if (!selectedCourse) {
      toast.error('Please select a course.');
      return false;
    }
    if (!termsAccepted) {
      toast.error('Please accept our terms and conditions');
      return false;
    }
    return true;
  };

  const handlePayNow = async () => {
    if (!validateInputs()) return;

    // Check if phone number includes a country code
    if (!phone.startsWith('+')) {
      toast.error('Please select a country code before proceeding.');
      return;
    }

    if (phone.startsWith('+91')) {
      payWithRazorPay();
    } else {
      payWithRazorPayInternational();
    }

  };

  //** HNDLE COURSE CHANGE */
  const handleCourseChange = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);

    // Simulate fetching coursePrice based on course selection (replace with actual logic)
    switch (course) {
      case 'AI_Developer':
        setCoursePrice(1000);
        break;
      case 'AI_Leader':
        setCoursePrice(1200);
        break;
      case 'AI_Manager':
        setCoursePrice(499);
        break;
      case 'AI_Combo':
        setCoursePrice(2200);
        break;
      default:
        setCoursePrice(0);
        break;
    }
  };

  // ** INDIAN USER (razorpay)**//
  const payWithRazorPay = async () => {
    setLoading(true);
    const exchangeRate = `${process.env.REACT_APP_EXCHANGE_RATE}`;
    let priceInINR = coursePrice * exchangeRate; // Convert USD to INR

    const gstInr = priceInINR * 0.18;

    let totalPrice = (priceInINR + gstInr) * (1 - discount) * 100; // Convert INR to paise.

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/create-razorpay-order`,
        {
          amount: totalPrice,
          program: selectedCourse,
          email: email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      // console.log('create order res:', response);

      if (response.status === 200) {
        const data = response.data;
        const razorpayOrderId = data.orderId;

        // Save transaction data to Firestore before redirecting to payment gateway
        const transactionData = {
          name: name,
          email: email,
          courseName: selectedCourse,
          price: `₹${totalPrice / 100}`, // paisa to ruppes.
          coupon: coupon,
          phone: phone,
          timestamp: new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
          }),
        };

        const docRef = doc(firestore, 'before_transaction', email);
        await setDoc(docRef, {
          timestamp: serverTimestamp(),
        });
        const doccollRef = doc(firestore, `before_transaction/${email}`);
        const transactionRef = doc(collection(doccollRef, 'transactions'));
        await setDoc(transactionRef, transactionData);

        // Redirect to Razorpay payment page
        const options = {
          key: `${process.env.REACT_APP_RAZORPAY_KEY_ID}`, // Replace with your Razorpay key ID
          amount: totalPrice,
          currency: 'INR',
          name: 'CalAI',
          description: `${selectedCourse}`, // Mention GST in the description
          order_id: razorpayOrderId,
          notes: {
            gstIncluded: `₹${gstInr} GST included in the total amount`,
            basePrice: `₹${priceInINR} Base Price`,
          },
          handler: async function (response) {
            // console.log('Razorpay response:', response);
            // Capture payment on backend
            try {
              const captureResponse = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/raz-capture-payment`,
                {
                  paymentId: response.razorpay_payment_id,
                  amount: totalPrice,
                },
              );

              // console.log('Front captureResponse:', captureResponse);

              if (captureResponse.status === 200) {
                // setTransactionId(response.razorpay_payment_id);
                setTransactionId(captureResponse.data.transactionId);
                setIsPaymentConfirmed(true);
              } else {
                console.error('Failed to capture order');
                navigate('/cancel');
              }
            } catch (error) {
              console.error('Error capturing payment:', error);
            }
          },
          prefill: {
            name: name,
            email: email,
            contact: phone,
          },
          theme: {
            color: '#F37254',
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.error('Payment initiation failed.');
        toast.error('Payment initiation failed.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error('Error initiating payment:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  //** RAZORPAY INTERNATIONAL **/
  const payWithRazorPayInternational = async () => {
    setLoading(true);
    const totalAmount = coursePrice * (1 - discount) * 100; // Convert in to doller to cent.
    // console.log('TotalPrice:', totalAmount);
    const totalPrice = Math.ceil(totalAmount);
    // console.log('TotalPrice:', totalPrice);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/create-razorpay-int-order`,
        {
          amount: totalPrice,
          program: selectedCourse,
          email: email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      // console.log('create order res:', response);

      if (response.status === 200) {
        const data = response.data;
        const razorpayOrderId = data.orderId;

        // Save transaction data to Firestore before redirecting to payment gateway
        const transactionData = {
          name: name,
          email: email,
          courseName: selectedCourse,
          price: `$ ${totalPrice / 100}`, // cent to doller.
          coupon: coupon,
          phone: phone,
          timestamp: new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
          }),
        };

        const docRef = doc(firestore, 'before_transaction', email);
        await setDoc(docRef, {
          timestamp: serverTimestamp(),
        });
        const doccollRef = doc(firestore, `before_transaction/${email}`);
        const transactionRef = doc(collection(doccollRef, 'transactions'));
        await setDoc(transactionRef, transactionData);

        // Redirect to Razorpay payment page
        const options = {
          key: `${process.env.REACT_APP_RAZORPAY_KEY_ID}`, // Replace with your Razorpay key ID
          amount: totalPrice,
          currency: 'USD',
          name: 'CalAI',
          description: selectedCourse,
          order_id: razorpayOrderId,
          handler: async function (response) {
            // console.log('Razorpay response:', response);
            // Capture payment on backend
            try {
              const captureResponse = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/raz-capture-int-payment`,
                {
                  paymentId: response.razorpay_payment_id,
                  amount: totalPrice,
                },
              );

              // console.log('Front captureResponse:', captureResponse);

              if (captureResponse.status === 200) {
                // setTransactionId(response.razorpay_payment_id);
                setTransactionId(captureResponse.data.transactionId);
                setIsPaymentConfirmed(true);
              } else {
                console.error('Failed to capture order');
                toast.error('Payment capturing failed.');
                navigate('/cancel');
              }
            } catch (error) {
              console.error('Error capturing payment:', error);
              toast.error('Something went wrong. Please try again later1');
            }
          },
          prefill: {
            name: name,
            email: email,
            contact: phone,
          },
          notes: {
            address: 'CalAI Corporate Office',
          },
          theme: {
            color: '#F37254',
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.error('Payment initiation failed.');
        toast.error('Payment initiation failed.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error('Error initiating payment razorpay international:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  //** PAYPAL INTERNATIONAL PAYMENT **/
  // const payWithPayPal = async () => {
  //   setPayPalLoading(true);
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_SERVER_URL}/create-order`,
  //       {
  //         amount: coursePrice * (1 - discount),
  //         program: selectedCourse,
  //         email: email,
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );

  //     if (response.status === 200) {
  //       const data = response.data;
  //       const approvalURL = data.approvalUrl;

  //       if (approvalURL) {
  //         // Construct the transaction data
  //         const transactionData = {
  //           name: name,
  //           email: email,
  //           courseName: selectedCourse,
  //           price: coursePrice,
  //           coupon: coupon,
  //           phone: phone,
  //           timestamp: new Date().toLocaleString('en-US', {
  //             timeZone: 'Asia/Kolkata',
  //           }),
  //         };

  //         const docRef = doc(firestore, 'before_transaction', email);
  //         await setDoc(docRef, {
  //           timestamp: serverTimestamp(),
  //         });
  //         // Construct the correct Firestore references
  //         const doccollRef = doc(firestore, `before_transaction/${email}`);
  //         const transactionRef = doc(collection(doccollRef, 'transactions'));

  //         await setDoc(transactionRef, transactionData);

  //         window.location.href = approvalURL;
  //       } else {
  //         console.error('Approval URL not found in response.');
  //         toast.error('Approval URL not found.');
  //       }
  //     } else {
  //       console.error('Payment initiation failed.');
  //       toast.error('Payment initiation failed.');
  //     }
  //   } catch (error) {
  //     toast.error('Something went wrong. Please try again later.');
  //     console.error('Error initiating payment paypal:', error);
  //     setPayPalLoading(false);
  //   } finally {
  //     setPayPalLoading(false);
  //   }
  // };

  const handleGoHome = () => {
    setIsPaymentConfirmed(false);
    navigate('/');
  };

  //HANDLE COPY BUTTON:
  const handleCopyTransactionId = () => {
    navigator.clipboard
      .writeText(transactionId)
      .then(() => {
        toast.success('Transaction ID copied to clipboard!');
      })
      .catch((err) => {
        toast.error('Failed to copy transaction ID.');
      });
  };

  return (
    <>
      <Header />
      <div className="checkout-container p-5 bg-gray-100 flex items-center justify-center">
        <div className="bg-white flex flex-row md:flex-col rounded-md shadow-lg items-stretch justify-between w-full max-w-5xl">
          {/* Checkout card */}
          <div className="checkout-card flex flex-col items-center mx-auto w-full md:max-w-md p-6 bg-white rounded-lg">
            <h1 className="text-2xl text-[#074D8D] font-semibold mb-4 text-center">
              Express Checkout
            </h1>
            <hr className="border-t mb-5 border-gray-600" />
            <div className="checkout-details mb-1 flex flex-col gap-3 text-left w-full">
              <div className="mb-3 flex flex-col w-full">
                <label
                  htmlFor="courseName"
                  className="text-lg font-medium mb-1"
                >
                  Course Name:
                </label>
                <select
                  id="courseName"
                  value={selectedCourse}
                  onChange={handleCourseChange}
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200"
                >
                  <option value="">Select a course</option>
                  <option value="AI_Leader">
                    Certified Artificial Intelligence Leader (CAIL)
                  </option>
                  <option value="AI_Developer">
                    Certified Artificial Intelligence Developer (CAID)
                  </option>
                  <option value="AI_Combo">Combo program (CAID + CAIL)</option>
                </select>
              </div>
              <div className="mb-3 flex flex-col w-full">
                <label htmlFor="name" className="text-lg font-medium mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200"
                />
              </div>
              <div className="mb-3 flex flex-col w-full">
                <label htmlFor="email" className="text-lg font-medium mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200"
                />
              </div>
              <div className="mb-3 flex flex-col w-full">
                <label htmlFor="phone" className="text-lg font-medium mb-1">
                  Phone:
                </label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200"
                />
              </div>
              <hr className="col-span-2 border-t border-gray-600" />
              <div className="w-full flex flex-row md:flex-row justify-between">
                <div className="w-1/2 flex justify-end mr-2">
                  <label htmlFor="totalFees" className="text-lg font-medium">
                    Total Fees:
                  </label>
                </div>
                <div className=" w-1/2 text-[18px] text-[#CBA135] sm:text-[16px] lg:text-[18px] flex items-start">
                  {discount > 0 && (
                    <span className="text-[#CBA135] line-through mr-2">
                      ${coursePrice.toFixed(2)}
                    </span>
                  )}
                  <span
                    className={
                      discount > 0
                        ? 'text-green-600 font-semibold'
                        : 'font-semibold'
                    }
                  >
                    ${(coursePrice * (1 - discount)).toFixed(2)}
                  </span>
                </div>
              </div>
              <hr className="w-full border-t border-gray-600" />
            </div>
            <div className="w-7/8 coupon-section my-5 flex flex-row items-center">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={handleCouponChange}
                className="w-full p-2 border rounded bg-gray-200"
              />
              <button
                onClick={applyCoupon}
                className={`p-2 ${
                  couponApplied
                    ? 'cursor-not-allowed text-green-600 w-full'
                    : invalidCoupon
                    ? 'cursor-not-allowed text-red-600 w-full'
                    : 'cursor-pointer text-blue-700 w-1/2'
                } rounded font-semibold`}
                disabled={couponApplied}
              >
                {couponApplied
                  ? 'Coupon Applied'
                  : invalidCoupon
                  ? 'Invalid Coupon'
                  : 'Apply'}
              </button>
            </div>
            <hr className="col-span-2 w-full border-t border-gray-600 mb-4" />
            <div className="flex items-center text-sm mb-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mr-2"
              />
              <label htmlFor="terms">
                I accept the{' '}
                <Link
                  to="/Terms&Conditions"
                  className="text-blue-500 hover:underline"
                >
                  terms and conditions
                </Link>{' '}
                and the{' '}
                <Link
                  to="/Privacy_Policy"
                  className="text-blue-500 hover:underline"
                >
                  privacy policy
                </Link>
                .
              </label>
            </div>
            <div className="w-1/2 pay-now flex justify-center mt-3">
              <button
                disabled={loading}
                onClick={handlePayNow}
                className="w-full px-4 py-2 bg-[#074D8D] text-white rounded"
              >
                {loading ? 'Redirecting...' : 'Pay Now'}
              </button>
            </div>
          </div>
          {/* Testimonial Card */}
          <div className="testimonial-card flex flex-col items-center mx-auto w-full md:max-w-md p-6 bg-white rounded-lg mt-4">
            <p className="text-gray-700 w-full font-bold mb-1 text-center">
            Here’s what our students say
            </p>
            <p className="text-gray-700 w-full text-sm text-center mb-2">
              "CalAI provided me with essential AI skills for my Data Analytics
              career. It's affordable and highly effective. I recommend it for
              professional growth."
            </p>

            <img
              src={Aiyana} // Replace with actual path to your image
              alt="Aiyana Thomas"
              className="w-24 h-24 rounded-full mb-1"
            />
            <h2 className="text-lg font-semibold text-[#074D8D]">
              Aiyana Thomas
            </h2>
            <p className="text-sm font-medium text-[#074D8D] mb-2">
              Certified AI Leader
            </p>
          </div>
        </div>

        {/* PAYMENT POPUP */}
        {/* {showPayPopUp && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 px-0 sm:px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-md w-full text-center relative">
              <h2 className="text-xl font-semibold text-gray-800">
                Choose Payment Method
              </h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={payWithRazorPayInternational}
                  className="w-full bg-[#074D8D] text-white px-4 py-2 rounded hover:bg-[#216db4] sm:text-sm"
                >
                  {razLoading ? 'Redirecting...' : 'Pay with Razorpay'}
                </button>
                <button
                  onClick={payWithPayPal}
                  className="w-full border-2 text-black px-4 py-2 rounded hover:bg-yellow-100 sm:text-sm"
                >
                  {payPalLoading ? 'Redirecting...' : 'Pay with PayPal'}
                </button>
              </div>
              <button
                onClick={() => setShowPayPopUp(false)}
                className="absolute right-1 -top-2 hover:bg-gray-200 p-1 rounded-full"
              >
                <RxCross2 className="2xl" />
              </button>
            </div>
          </div>
        )} */}

        {/* SUCCESS POPUP */}
        {isPaymentConfirmed && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 px-0 sm:px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-md w-full flex flex-col justify-center items-center relative">
              <div>
                <img
                  src={successImg}
                  alt="success"
                  className="w-20 h-20 animate-scale-animation"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <p className="text-xl font-semibold text-gray-700">
                  Payment successfull!
                </p>
                <p className="text-xl font-semibold text-gray-700">
                  Thank you for your purchase!
                </p>
                {transactionId.length > 0 && (
                  <div className="w-full mt-5 flex sm:flex-col md:flex-row items-center justify-center">
                    <p className="sm:text-sm md:text-base text-gray-600 mr-1">
                      <span className="font-semibold">Transaction Id :</span>
                    </p>
                    <div className="flex flex-row items-center sm:mt-2 ">
                      <span className="py-1 px-1 border rounded-md">
                        {transactionId}
                      </span>
                      <button
                        onClick={handleCopyTransactionId}
                        className="ml-2 p-1 rounded-md shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center"
                      >
                        <MdOutlineFileCopy className="text-lg" />
                      </button>
                    </div>
                  </div>
                )}
                <button
                  onClick={handleGoHome}
                  className="mt-8 px-4 py-2 bg-blue-500 text-white text-md rounded-md shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  Go Back to Home Screen
                </button>
              </div>
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
    </>
  );
};

export default ExpressCheckout;
