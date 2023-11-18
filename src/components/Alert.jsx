import React from "react";
import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
import { BiSolidError } from "react-icons/bi";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p>
        {alert.type === "error" && <BiSolidError />}
        <strong>{alert.msg}</strong>
      </p>
    )
  );
};

export default Alert;
