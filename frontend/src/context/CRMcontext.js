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

  const sendDataToHubsPot = async (leadData) => {
    console.log("leadData:",leadData);
    try {
      const response = axios.post(`${process.env.REACT_APP_SERVER_URL}/send-data-hubspot`,{
        leadData
      }
    );
    console.log("sendDataToHubsPot res:",response);
    return response;
    } catch (error) {
      console.log("Hubspot error:",error);
      throw error;
    }
  }

  return (
    <CRMContext.Provider value={{ sendDataToCRM, loading ,sendDataToHubsPot}}>
      {children}
    </CRMContext.Provider>
  );
};
