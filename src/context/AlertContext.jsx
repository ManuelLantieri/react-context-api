import React, { createContext, useState, useContext } from "react";
import Alert from "../components/Alert";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: "", type: "" });

  const showAlert = (message, type = "success") => {
    setAlert({ message, type });
    setTimeout(() => setAlert({ message: "", type: "" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <Alert message={alert.message} type={alert.type} />
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
