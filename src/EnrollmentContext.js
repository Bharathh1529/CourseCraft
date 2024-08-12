import React, { createContext, useState, useContext } from 'react';

// Create a Context for the enrollment status
const EnrollmentContext = createContext();

// Provider component
export const EnrollmentProvider = ({ children }) => {
  const [enrolled, setEnrolled] = useState(false);

  return (
    <EnrollmentContext.Provider value={{ enrolled, setEnrolled }}>
      {children}
    </EnrollmentContext.Provider>
  );
};

// Custom hook to use the enrollment context
export const useEnrollment = () => useContext(EnrollmentContext);
