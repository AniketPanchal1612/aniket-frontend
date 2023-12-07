import React, { useState } from "react";
import Search from "../layouts/Search";

import {
  setFilterType,
  setFilterBedroom,
  setFilterBudget,
  setFilterFurnishings,
  clearAllFilters,
} from './../../slices/FilterSlice'
import { useDispatch } from "react-redux";
const ProperyFilter = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("");
  const [selectedBedroom, setSelectedBedroom] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedFurnishings, setSelectedFurnishings] = useState("");
  // const locations = [
  //   "Ahmedabad",
  //   "Hyderabad",
  //   "Mumbai",
  //   "Pune",
  //   "Delhi",
  //   "Chennai",
  //   "Kolkata",
  //   "Bangalore",
  //   "Jaipur",
  //   "Lucknow",
  // ];
  const tenantTypes = ["Any", "Boys", "Girls", "Family"];
  const bedroomTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK"];
  const budgetTypes = [
    "Below 5K",
    "5K - 10K",
    "10K - 20K",
    "15k - 20K",
    "Above 20K",
  ];

  const furnishingType = ["fully_furnished", "semi_furnished", "unfurnished"];

  const handleTypeSelection = (type) => {
    const lowercaseType = type.toLowerCase(); // Get the lowercase value
  dispatch(setFilterType(lowercaseType));
    // dispatch(setFilterType(type));
    console.log(type);
    setSelectedType(type);
  };

  const handleBedroomSelection = (type) => {
    const lowercaseType = type.toLowerCase(); // Get the lowercase value
    dispatch(setFilterBedroom(lowercaseType))
    // dispatch(setFilterBedroom(type))
    console.log(type);
    setSelectedBedroom(type);
  };

  const handleBudgetSelection = (type) => {
    const lowercaseType = type.toLowerCase(); // Get the lowercase value
    dispatch(setFilterBudget(lowercaseType));
    // dispatch(setFilterBudget(type))
    console.log(type);
    setSelectedBudget(type);
  };

  const handleFurnishedSelection = (type) => {
    const lowercaseType = type.toLowerCase();
    dispatch(setFilterFurnishings(lowercaseType))
    // dispatch(setFilterFurnishings(type))
    console.log(type);
    setSelectedFurnishings(type);
  };

  const clearAllfilters = () => {
    dispatch(clearAllFilters)
    setSelectedType("");
    setSelectedBedroom("");
    setSelectedBudget("");
    setSelectedFurnishings("");
  };
  return (
    <div className="ml-3 pt-0 mr-1">
      

      {/* Search Button */}
      <div className="flex mt-3">
        <Search hideText={true} />
      </div>

      {/* Filter Features */}

      <div className="text-sm">
        <p className=" mt-3 text-xl">Filters:</p>
        <div className="mt-1 border-gray-300 border rounded-lg p-2 mb-5">
          {/* Tenant Type Filter */}
          <div>
            <label htmlFor="" className="">
              Tenant Type:
            </label>
            <div className="flex flex-wrap gap-2 mt-1">
              {tenantTypes.map((type, index) => (
                <div
                  key={index}
                  onClick={() => handleTypeSelection(type)}
                  className={`border-gray-800 border rounded-3xl py-1 px-3 cursor-pointer ${
                    selectedType === type
                      ? "bg-green-500 text-white border-0"
                      : ""
                  }`}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-300 mt-2 mb-2" />

          {/* Bedrooms Filter */}
          <div className="">
            <label htmlFor="" className="">
              Bedrooms:
            </label>
            <div className="flex flex-wrap gap-2 mt-1">
              {bedroomTypes.map((type, index) => (
                <div
                  key={index}
                  onClick={() => handleBedroomSelection(type)}
                  className={`border-gray-800 border rounded-3xl py-1 px-3 cursor-pointer ${
                    selectedBedroom === type
                      ? "bg-green-500 text-white border-0"
                      : ""
                  }`}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-300 mt-2 mb-2" />


          {/* Budget Filter */}
          <div className="">
            <label htmlFor="" className="">
              Budjet:
            </label>
            <div className="flex flex-wrap gap-2 mt-1">
              {budgetTypes.map((type, index) => (
                <div
                  key={index}
                  onClick={() => handleBudgetSelection(type)}
                  className={`border-gray-800 border rounded-3xl py-1 px-3 cursor-pointer ${
                    selectedBudget === type
                      ? "bg-green-500 text-white border-0"
                      : ""
                  }`}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-300 mt-5" />


          {/* Furnishing Filter */}
          <div>
            <label htmlFor="" className="">
              Furnishing Type:
            </label>
            <div className="flex flex-wrap gap-2 mt-1">
              {furnishingType.map((type, index) => (
                <div
                  key={index}
                  onClick={() => handleFurnishedSelection(type)}
                  className={`border-gray-800 border rounded-3xl py-1 px-3 cursor-pointer ${
                    selectedFurnishings === type
                      ? "bg-green-500 text-white border-0"
                      : ""
                  }`}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
          <hr className="border-gray-300 mt-5" />
                  <div className="flex justify-between mt-4">

      <button className="text-xs underline text-blue-800" onClick={clearAllfilters}>Clear All Filters</button>
      <button className="text-xs  text-white bg-black rounded-lg p-2">Apply Filter</button>
                  </div>

        </div>
      </div>
    </div>
  );
};

export default ProperyFilter;
