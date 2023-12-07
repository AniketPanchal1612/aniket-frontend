import React from "react";
import { ProgressBar } from "react-loader-spinner";
import "./CustomLoader.css"; 

const CustomLoader = () => {
  return (
    <div className="loader-container">
      <div className="centered">
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#51E5FF"
        />
      </div>
    </div>
  );
};

export default CustomLoader;
