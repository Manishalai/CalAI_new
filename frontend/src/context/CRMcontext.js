import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const CRMContext = createContext();

export const useCRM = () => useContext(CRMContext);

export const CRMProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const sendDataToCRM = async (leadData) => {
    try {
      const response = axios.post(
        `${process.env.REACT_APP_SERVER_URL}/send-data-crm`,{
          leadData
        }
      );
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return (
    <CRMContext.Provider value={{ sendDataToCRM, loading }}>
      {children}
    </CRMContext.Provider>
  );
};
