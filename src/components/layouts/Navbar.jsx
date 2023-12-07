import React, { useState } from "react";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LuHotel } from "react-icons/lu";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const booking = useSelector((state) => state.booking);

  const locations = [
    "Ahmedabad",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Delhi",
    "Chennai",
    "Kolkata",
    "Bangalore",
    "Jaipur",
    "Lucknow",
  ];

  const genders = ["Boys", "Girls", "Family", "Any"];

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLocationSelection = (location) => {
    setSelectedLocation(location);
    setShowDropdown(false);
  };

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    setShowDropdown(false);
  };

  return (
    <div className="sticky top-0 bg-white">
      <div className="ml-5 pt-5 pb-3 flex flex-row gap-6 justify-between pr-4">
        <div className="flex flex-row gap-6">
          <Link to={"/"}>
            <Logo className="cursor-pointer" />
          </Link>

          <div
            className=" flex-row items-center justify-center gap-2 hidden lg:flex"
            onClick={handleDropdownClick}
            style={{ cursor: "pointer" }}
          >
            <div className="flex flex-row">
              <p className="">{selectedLocation || locations[7]}</p>
              <RiArrowDropDownLine className="mt-1" />
            </div>
            <div className="flex flex-row">
              <p>{selectedGender ||genders[1]}</p>
              <RiArrowDropDownLine className="mt-1" />
            </div>
          </div>

          {showDropdown && (
            <div className="absolute mt-10 ml-20 bg-white p-2 border rounded grid grid-cols-2 gap-1">
              <div>
                <p className="font-semibold text-xl">
                  I'm looking to rent a home in
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {locations.slice(0, 10).map((location, index) => (
                    <div
                      key={index}
                      onClick={() => handleLocationSelection(location)}
                      className="cursor-pointer hover:bg-gray-200 p-1 rounded"
                    >
                      {location}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-col-2">
                <p className="font-semibold text-xl">For:</p>
                {genders.map((gender, index) => (
                  <div
                    key={index}
                    onClick={() => handleGenderSelection(gender)}
                    className="cursor-pointer hover:bg-gray-200 p-1 rounded"
                  >
                    {gender}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Booking Page Link */}

        <Link
          to={"/mybookings"}
          className="bg-black rounded-md text-white p-2 text-xs flex items-center gap-1"
        >
          My Bookings <LuHotel />{" "}
          {booking?.bookings?.length > 0 ? booking?.bookings?.length : 0}
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
