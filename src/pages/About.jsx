import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1>Github Finder</h1>
      <h3>
        This is an application made using React to search for github profiles
        and see profile details
      </h3>
      <h4>
        {" "}
        <span style={{ color: " rgb(195, 195, 195)" }}>Version: </span>1.0.0
      </h4>
    </div>
  );
};

export default About;
