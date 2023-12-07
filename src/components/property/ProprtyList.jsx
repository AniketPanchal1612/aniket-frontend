import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../slices/PropertyDataSlice";
import { Link } from "react-router-dom";
import CustomLoader from "../layouts/CustomLoader";


const ProprtyList = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);
  
  const selectedType = useSelector((state) => state.filters.selectedType);
  const selectedBedroom = useSelector((state) => state.filters.selectedBedroom);
  const selectedBudget = useSelector((state) => state.filters.selectedBudget);
  const selectedFurnishings = useSelector((state) => state.filters.selectedFurnishings);

  const [selectedRoom, setSelectedRoom] = useState("Flat");
  const roomTypes = ["Independent", "Flat", "Apartment"];

  const handleRoomType = (type) => {
    setSelectedRoom(type);
  };


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch,selectedType,selectedFurnishings,selectedBedroom,selectedBudget]);

  const { data, loading } = useSelector((state) => state.data);

  // useEffect(() => {
  //   console.log(data.houses); // This will log the fetched data
  // }, [data]);

  return (
    <div>
      {loading ? (
        <CustomLoader className="flex" />
      ) : (
        <div className="bg-gray-100">
          <div className="lg:hidden md:hidden">
            
          </div>
          {/* Room Types */}
          <div className="hidden lg:flex flex-wrap pt-10 justify-center text-2xl">
            {roomTypes.map((type, index) => (
              <div
                key={index}
                onClick={() => handleRoomType(type)}
                className={`border-gray-800 border py-1 px-10 cursor-pointer  text-center ${
                  selectedRoom === type
                    ? "bg-green-500 text-white border-0"
                    : ""
                } ${
                  index === 0
                    ? "rounded-l"
                    : "" /* Rounded left border for first div */
                } ${
                  index === roomTypes.length - 1
                    ? "rounded-r"
                    : "" /* Rounded right border for last div */
                }`}
              >
                {type}
              </div>
            ))}
          </div>

          {/* Fetch Data Details */}
          <div className="flex flex-col gap-2 ml-2 mt-12 h-screen	 lg:overflow-y-auto ">
            {data?.houses
              ?.filter((house) => {
                if (searchQuery) {
                  const query = searchQuery.toLowerCase();
                  const bed = selectedBedroom.toLowerCase()
                  const genderType = selectedType.toLowerCase();
                  const furnish = selectedFurnishings.toLowerCase();
                  console.log(bed,genderType,furnish,query)
                  // const roomType = selectedRoom.toLowerCase();
                  // console.log(roomType);
                  return (
                    (house.locality.toLowerCase().includes(query) ||
                      house.description.short_description
                        .toLowerCase()
                        .includes(query))
                        // (house.gender.toLowerCase() === genderType)
                        // &&
                        // (house.bhk_details.toLowerCase()==bed)&&
                        // (house.furnishing_type.toLowerCase()==furnish)
                    //      &&
                    // (selectedRoom === "Flat" ||
                    //   house.house_type.toLowerCase() === roomType) &&
                    //   filterData(house)
                  );
                } else {
                  return true;
                }
              })

              .map((house, index) => (
                <div>
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row lg:p-2 p-1 justify-center items-center"
                  >
                    <img
                      src={house.list_view_photos[0] || house.image_url}
                      alt=""
                      className="w-full lg:w-48 rounded-xl lg:mr-4"
                    />
                    <div className=" lg:pl-0">
                      <p className="text-sm text-gray-500">
                        Property Id: {house?.id}
                      </p>
                      <p>For: {house?.gender}</p>
                      <p className="text-sm text-gray-500">
                        Property Type: {house?.house_type}
                      </p>
                      <p className="text-sm text-gray-500">
                        Property Location: {house?.city}
                      </p>

                      <div className="flex flex-row justify-between">
                        <p className="">
                          ₹{house.rent}/<span className="text-xs">bed</span>
                        </p>
                        <p>
                          Deposite: {house.num_months_as_deposit} month rent
                        </p>
                      </div>

                      <p className="desc text-xs mt-3 lg:mt-0 lg:text-sm">
                        {house.description.short_description}
                      </p>

                      <div className="flex flex-col lg:flex-row text-center items-center lg:justify-evenly text-gray-500 text-sm mt-4 lg:mt-0">
                        <div className="flex flex-row">
                          <div className="location border-r border-gray-400 pr-3 ">
                            Location
                            <p>{house.city}</p>
                          </div>
                          <div className="area border-r border-gray-400 pr-3">
                            Location
                            <p>{house.area} sq. ft</p>
                          </div>
                          <div className="furnishing border-gray-400 pl-3">
                            Furnishing
                            <p>{house.furnishing_type}</p>
                          </div>
                        </div>
                        <Link to={`/houses/${house.id}`} className="">
                          <button
                            className="bg-green-500 text-white h-12 rounded-lg mt-6 lg:mt-0"
                            style={{ width: "8rem" }}
                          >
                            View Details
                          </button>
                        </Link>
                      </div>
                      <div className="text-sm text-gray-400 hidden lg:block">
                        <p>{house.mdescription.slice(0, 70)}...</p>
                      </div>
                    </div>
                  </div>
                  <hr className="w-full mt-3 mb-3 border-gray-400" />
                </div>
              ))}
          </div>
        </div>
      )}
      {/* <div className="flex justify-center">
        <button className="backdrop-blur-md bg-black text-white lg:hidden rounded-lg fixed bottom-4 w-1/3 py-2 text-center z-10">
          Filter
        </button>
      </div> */}
    </div>
  );
};

export default ProprtyList;
