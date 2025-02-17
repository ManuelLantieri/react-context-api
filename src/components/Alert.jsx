import React from "react";
import { useAlert } from "../context/AlertContext";

const Alert = () => {
  const { alert } = useAlert();

  if (!message) return null;
  return <div className={`alert ${alert.type}`}>{alert.message}</div>;
};

export default Alert;
