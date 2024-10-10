import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { firestore } from '../../firebase/firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import badgeImg from '../../images/badge-img-2.jpeg';
import badgeImg2 from '../../images/badge-img.webp';
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function CertificatePopup({ certificateId, setShowCertificate }) {
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCertificateData = async () => {
      setLoading(true); // Start loading
      try {
        const docRef = doc(firestore, 'certificates', certificateId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCertificateData(docSnap.data());
        } else {
          setError('Certificate not found.');
        }
      } catch (error) {
        console.error('Error fetching certificate data:', error);
        setError('Error fetching certificate data.');
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchCertificateData();
  }, [certificateId]);

  const handleCertificateClose = () => {
    setShowCertificate(false);
    window.history.replaceState({}, '', '/');
  };

  if (loading) {
    return <p>Loading certificate...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const { fullName, courseName, issueDate, certificateImageUrl } =
    certificateData;

  // Convert Firestore Timestamp to Date and format
  const formattedDate =
    issueDate instanceof Date
      ? issueDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : issueDate.seconds
      ? new Date(issueDate.seconds * 1000).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Date not available';

  return (
    <div className="fixed bottom-2 right-2 w-3/5 h-3/4 p-4 px-5 bg-gray-50 shadow-lg z-50 border rounded-lg text-blue-900">
      <Helmet>
        <title>{`${fullName} - ${courseName}`}</title>
        <meta
          property="og:title"
          content={`${fullName} received ${courseName}`}
        />
        <meta
          property="og:description"
          content={`Issued on ${new Date(
            issueDate,
          ).toLocaleDateString()}. View the certificate.`}
        />
        <meta property="og:image" content={certificateImageUrl} />
        <meta
          property="og:url"
          content={`https://calai.org/certificate/${certificateId}`}
        />
      </Helmet>

      <div className="mb-5 flex justify-between items-center">
        <div className="w-full h-3 bg-blue-900 rounded-tl-md rounded-bl-md"></div>
        <img src={badgeImg} alt="badge-img" className="h-20 mx-10" />
        <div className="w-full h-3 bg-blue-900 rounded-tr-md rounded-br-md"></div>
      </div>
      <h2 className="text-4xl font-bold text-center mb-5">
        Certificate Preview
      </h2>
      <div className="w-full flex justify-evenly ">
        <div className="w-2/4">
          <img
            src={certificateImageUrl}
            alt="Certificate Preview"
            className="w-full h-auto"
          />
        </div>
        <div className="w-2/4 p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-3xl text-wrap">{fullName}</p>
            <p className="font-bold text-2xl">{courseName}</p>

            <p><strong>Certified Member:</strong> {certificateId}</p>
            <p>
              <strong>Issued Date:</strong> {formattedDate}
            </p>
          </div>
          <img src={badgeImg2} alt='badge' className='w-16 h-16'/>
          <NavLink className='w-32 text-center px-4 py-2 bg-blue-800 rounded-md text-white hover:bg-blue-700'>View more</NavLink>
        </div>
      </div>

      {/* Close button */}
      <div className='absolute top-2 right-2'>
      <button
            className="text-gray-800 hover:bg-gray-300 p-1"
            onClick={handleCertificateClose}
          >
            <IoClose className='text-xl'/>
          </button>
      </div>
    </div>
  );
}

export default CertificatePopup;
