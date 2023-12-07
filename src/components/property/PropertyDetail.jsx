
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPropertyById } from "./../../slices/FetchSinglePropertySlice"; 
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../layouts/Footer";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../layouts/CustomLoader";
import Navbar from "../layouts/Navbar";
import { BsTextareaResize } from "react-icons/bs";
import { FaBath } from "react-icons/fa6";
import { LuSofa } from "react-icons/lu";

const PropertyDetail = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  // Fetch property details when the component mounts or when ID changes
  useEffect(() => {
    dispatch(fetchPropertyById(id));
  }, [dispatch, id]);

  // Retrieve the property details from the Redux store
  const { loading, error, property } = useSelector(
    (state) => state.singleProperty
  );

  if (error) {
    return <div>Error: {error}</div>;
  }


  const handleBookNowClick = () => {
    // Redirect to the user information form page
    navigate(`/book/${property.id}`); // Assuming property.id holds the ID
  };

  // Render the property details here
  return (
    <div>
      {/* Loader */}
      {loading || !property ? (
        <CustomLoader />
      ) : (
        <div>
          <Navbar />
          <div className="flex flex-row p-2 lg:p-10 md:p-8 lg:pl-24 text-sm lg:text-base ">
            <div className=" w-full lg:w-3/5 border-gray-300 rounded-md border p-4">
              <div className="title mt-4 mb-4 p-2 text-gray-400">
                <p className="text-sm">
                  Last Updated at:{" "}
                  {property?.last_updated_date
                    ? new Date(property.last_updated_date).toLocaleDateString()
                    : "N/A"}
                </p>
                <p className="text-black">
                  {property?.description?.short_description} - {property?.city}
                </p>
                <p className="mt-3 mb-3">Only for {property?.gender}</p>
                <p className="mt-3 mb-3">
                  Available From: {property?.available_from}
                </p>
              </div>

              {/* Image Slider */}
              <div
                className="img_div
            max-w-screen-lg mx-auto
            
            "
              >
                <Slider
                  className=""
                  dots={false}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                >
                  {property?.list_view_photos?.map((image, index) => (
                    <div key={index}>
                      <img
                        className="w-3/4 h-48 lg:h-72 object-contain mx-auto"
                        src={image}
                        alt={`Property ${index}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <button
                className="bg-black text-white lg:hidden p-3 w-full justify-center mt-2 rounded-md"
                onClick={handleBookNowClick}
              >
                Book Now
              </button>

              {/* Rent detail */}
              <div className="rent_detail">
                <p className="font-bold mt-4 mb-4">Rent this house at</p>
                <div className="flex flex-row gap-8">
                  <div className="flex flex-col text-center border-r-2 pr-4">
                    <p className="text-gray-500 text-sm">Rent From</p>
                    <p>₹ {property?.rent}</p>
                  </div>
                  <div className="flex flex-col text-center">
                    <p className="text-gray-500 text-sm">Security Deposite</p>
                    <p>₹ {property?.num_months_as_deposit} Month rents</p>
                  </div>
                </div>
              </div>

              <hr className="w-full mt-4 mb-4" />

              {/* House Features */}
              <div className="house_feature">
                <p className="text-xl mb-4">House Features</p>
                <div className="flex flex-wrap items-center justify-evenly text-center">
                  <div className="flex flex-col items-center">
                    <BsTextareaResize size={24} />

                    <p className="text-gray-500 text-sm">
                      {property?.area} sq. ft
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <LuSofa size={24} />
                    <p className="text-gray-500 text-sm">
                      {property?.furnishing_type}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaBath size={24} />
                    <p className="text-gray-500 text-sm">
                      {property?.bathroom_count}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="w-full mt-4 mb-4" />

              {/* house Amenity */}
              <div className="house_feature">
                <p className="text-xl mb-4">House Amenity</p>
                <div className="flex flex-wrap items-center justify-evenly">
                  {property?.amenity_list?.length === 0 ? (
                    <p>No amenities</p>
                  ) : (
                    property?.amenity_list?.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center mr-4 mb-2 just"
                      >
                        <img
                          src={amenity.icon_url}
                          alt={amenity.amenity}
                          className="w-10 h-10 mr-2"
                        />
                        <span className="text-xl">{amenity.amenity}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <hr className="w-full mt-4 mb-4" />

              {/* House Desc */}
              <div className="house_desc">
                <p className="text-xl mb-4">About House</p>
                <p className="text-sm text-gray-500">
                  {property?.mdescription}
                </p>
              </div>
            </div>


            {/* Book Button */}
            <div className="rounded-md ml-3 hidden  lg:w-2/5 lg:block p-4">
              <div className="sticky top-20">
                <button
                  className="bg-black text-white lg:block p-3 w-full justify-center mt-10 rounded-md"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* Render other property details as needed */}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
