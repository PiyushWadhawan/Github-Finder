import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const NotFound = () => {
  return (
    <>
      <div className="contain">
        <div className="oops">
          <h1>Oops!</h1>
        </div>
        <div className="upper">
          <div className="number n1">4</div>
          <div className="number n2">0</div>
          <div className="number n3">4</div>
        </div>
        <div className="lower">
          <h3>Page Not Found</h3>
        </div>
      </div>
      <h3 className="back">
        <Link to="/" className="back">
          <span>
            <BiArrowBack />
          </span>
        </Link>
      </h3>
    </>
  );
};

export default NotFound;
