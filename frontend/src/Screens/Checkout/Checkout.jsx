import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firestore } from '../../firebase/firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import Aiyana from '../../images/Rectangle 23.svg';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const location = useLocation();
  const { courseName, price } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [invalidCoupon, setInvalidCoupon] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

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
      console.log(response);
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

    const exchangeRate = `${process.env.REACT_APP_EXCHANGE_RATE}`;
    const priceInINR = price * exchangeRate; // Convert USD to INR
    // const totalPrice = priceInINR * (1 - discount) * 100; // Convert INR to paise.
    const totalPrice = 100;

    setLoading(true);

    try {
      if (phone.startsWith('+91')) {
        // ** INDIAN USER (razorpay)**//

        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/create-razorpay-order`,
          {
            amount: totalPrice,
            program: courseName,
            email: email,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        console.log('create order res:', response);

        if (response.status === 200) {
          const data = response.data;
          const razorpayOrderId = data.orderId;

          // Save transaction data to Firestore before redirecting to payment gateway
          const transactionData = {
            name: name,
            email: email,
            courseName: courseName,
            price: `Rs ${totalPrice/100}`,// paisa to ruppes.
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
            description: courseName,
            order_id: razorpayOrderId,
            handler: async function (response) {
              console.log('Razorpay response:', response);
              // Capture payment on backend
              try {
                const captureResponse = await axios.post(
                  `${process.env.REACT_APP_SERVER_URL}/raz-capture-payment`,
                  {
                    paymentId: response.razorpay_payment_id,
                    amount: totalPrice,
                  },
                );

                console.log('Front captureResponse:', captureResponse);

                if (captureResponse.status === 200) {
                  // setTransactionId(response.razorpay_payment_id);
                  setPaymentConfirmed(true);
                  navigate("/")
                } else {
                  console.error('Failed to capture order');
                  navigate("/cancel")
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
      } //** NON INDIAN USER (paypal)**/
      else {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/create-order`,
          {
            amount: price * (1 - discount),
            program: courseName,
            email: email,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.status === 200) {
          const data = response.data;
          const approvalURL = data.approvalUrl;

          if (approvalURL) {
            // Construct the transaction data
            const transactionData = {
              name: name,
              email: email,
              courseName: courseName,
              price: price,
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
            // Construct the correct Firestore references
            const doccollRef = doc(firestore, `before_transaction/${email}`);
            const transactionRef = doc(collection(doccollRef, 'transactions'));

            await setDoc(transactionRef, transactionData);

            window.location.href = approvalURL;
          } else {
            console.error('Approval URL not found in response.');
            toast.error('Approval URL not found.');
          }
        } else {
          console.error('Payment initiation failed.');
          toast.error('Payment initiation failed.');
        }
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error('Error initiating payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="checkout-container p-5 bg-gray-100 flex items-center justify-center">
        {/* parent container */}
        <div className="bg-white flex flex-row md:flex-col rounded-md shadow-lg items-stretch justify-between w-full max-w-5xl">
          {/* checkout card */}
          <div className="checkout-card flex flex-col items-center mx-auto w-full md:max-w-md p-6 bg-white rounded-lg">
            <h1 className="text-[24px] text-[#074D8D] font-semibold mb-4 text-center">
              Checkout
            </h1>
            <hr className="col-span-2 w-full border-t mb-5 border-gray-600" />
            <div className="checkout-details mb-1 flex flex-col gap-3 text-left w-full">
              <div className="mb-1 flex flex-col w-full">
                <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
                  Course Name:
                </p>
                <p className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200">
                  {courseName}
                </p>
              </div>
              <div className="mb-1 flex flex-col w-full">
                <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
                  Email:
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200"
                />
              </div>
              <div className="mb-1 flex flex-col w-full">
                <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
                  Name:
                </p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200"
                />
              </div>
              <div className="mb-1 flex flex-col w-full">
                <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
                  Phone:
                </p>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200 break-words"
                  error={
                    phone && !phone.startsWith('+')
                      ? 'Country code is required'
                      : ''
                  }
                />
              </div>
              <hr className="col-span-2 border-t border-gray-600" />
              <div className="w-full flex flex-row md:flex-row justify-between">
                <div className="w-1/2 flex justify-end mr-2">
                  <label
                    htmlFor="totalFees"
                    className="text-[18px] sm:text-[16px] font-medium"
                  >
                    Total Fees:
                  </label>
                </div>
                <div className=" w-1/2 text-[18px] text-[#CBA135] sm:text-[16px] lg:text-[18px] flex items-start">
                  {discount > 0 && (
                    <span className="text-[#CBA135] line-through mr-2">
                      ${price.toFixed(2)}
                    </span>
                  )}
                  <span
                    className={
                      discount > 0
                        ? 'text-green-600 font-semibold'
                        : 'font-semibold'
                    }
                  >
                    ${(price * (1 - discount)).toFixed(2)}
                  </span>
                </div>
              </div>
              <hr className="col-span-2 border-t border-gray-600" />
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
                onClick={handlePayNow}
                className="w-full px-4 py-2 bg-[#074D8D] text-white rounded"
                disabled={loading}
              >
                {loading ? 'Redirecting...' : 'Pay Now'}
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="testimonial-card flex flex-col items-center mx-auto w-full md:max-w-md p-6 bg-white rounded-lg mt-4">
            <p className="text-gray-700 w-6/7 font-bold mb-1text-center">
              Here is what our Client says:
            </p>
            <p className="text-gray-700 w-6/7 text-sm text-center mb-2">
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
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
