import React from "react";
import BannerImg from "./../../assets/banner.png";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center justify-center h-96 gap-5">
        <div className="lg:text-left md:text-left text-center ">
          <h2 className="font-bold text-4xl lg:text-5xl leading-relaxed mb-4">
            Rent the smart way <br /> with Nestaway!
          </h2>

          <ul className="flex flex-row gap-5 text-xs lg:text-sm">
            <li className="flex items-center gap-1">
              <FaCheck className="text-green-600" />
              Great Homes
            </li>
            <li className="flex items-center gap-1">
              <FaCheck className="text-green-600" />
              Reliable Services
            </li>
            <li className="flex items-center gap-1">
              <FaCheck className="text-green-600" />
              Affordable Prices
            </li>
          </ul>
        </div>
        <img src={BannerImg} alt="Banner" className="hidden lg:block" />

      </div>
      {/* Explore Homes */}
        <Link to={`/houses`} className="mb-6 bg-green-500 text-white p-2 rounded-md">
          Explore Houses
        </Link>
    </div>
  );
};

export default Banner;
