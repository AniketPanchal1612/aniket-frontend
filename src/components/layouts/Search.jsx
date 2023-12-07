import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "../../slices/SearchSlice";

const Search = ({ hideText }) => {
  // hideText for small searchbar style
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [locality, setLocality] = useState('');

  
  const handleSearch = () => {
    dispatch(setSearchQuery(locality));
    navigate('/houses'); // Redirect to PropertyList component after setting search query
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <input
        type="text"
        placeholder={` ${hideText?'Enter Keyword': 'Enter Location...'}`}
        value={locality}
        onChange={(e) => setLocality(e.target.value)}
        onKeyPress={handleKeyPress}
        className={`border-2 border-black rounded-l py-4 px-4 outline-none ${
          hideText ? "w-full border-r-0 cursor-pointer" : " w-3/5 "
        }`}
      />
      <button
      onClick={handleSearch}
        className={` border-2  border-black text-white rounded-r px-4 ${
          hideText ? "py-5 text-black border-l-0" : "py-5 lg:py-4 md:py-4 bg-black"
        } flex items-center gap-2 `}
      >
        <FaSearch className="w-4" />
        {!hideText && <p className="hidden lg:flex md:flex">Search</p>}
      </button>
    </div>
  );
};

export default Search;
