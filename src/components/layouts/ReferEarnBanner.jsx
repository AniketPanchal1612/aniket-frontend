import React from "react";
import ReferImg from "./../../assets/refer.png";

const ReferEarnBanner = () => {
  return (
    <div className="flex flex-col items-center bg-yellow-300 mt-4">

    <div className="flex flex-row items-center justify-center h-96 gap-5">
      <div className="lg:text-left md:text-left text-center ">
        <h2 className="font-bold text-4xl lg:text-5xl leading-relaxed mb-4">
        Refer and Earn <br />
        </h2>
        <p>Save big on rent or make some extra income by referring your friends & family</p>
      </div>
      <img src={ReferImg} alt="Banner"  className="hidden lg:block w-fit h-48" />

    </div>
    </div>

  );
};

export default ReferEarnBanner;
