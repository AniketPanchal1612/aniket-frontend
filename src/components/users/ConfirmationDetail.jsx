import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../slices/BookingSlice";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
const ConfirmationDetail = () => {
  const userData = useSelector((state) => state.user.userData);
  const selectedProperty = useSelector(
    (state) => state.singleProperty.property
  ); 
  console.log(selectedProperty);

  const dispatch = useDispatch();

  const handleConfirmBooking = () => {
    // Combine user and property details into a single object
    const bookingDetails = {
      user: userData,
      property: selectedProperty,
    };

    // Dispatch the action to save booking details to Redux store
    dispatch(addBooking(bookingDetails));
  };

  return (
    <>
      <Navbar />

      <div className="max-w-md mx-auto p-4 border rounded-md flex flex-col">
        <h2 className="text-2xl ">Confirmation Page</h2>

        {/* User Details */}
        <div className="flex flex-col mt-4">
          <h3 className="font-bold text-xl">User Details:</h3>

          <div className="mt-4 space-y-3 text-md">
            <p className="font-bold">
              Username:{" "}
              <span className="text-sm font-normal"> {userData?.username}</span>
            </p>
            <p className="font-bold">
              Email:{" "}
              <span className="text-sm font-normal"> {userData?.email}</span>
            </p>
            <p className="font-bold">
              Mobile No:{" "}
              <span className="text-sm font-normal"> {userData?.contact}</span>
            </p>
            <p className="font-bold">
              Address:{" "}
              <span className="text-sm font-normal"> {userData?.address}</span>
            </p>
            <p className="font-bold">
              Desire Booking Date:{" "}
              <span className="text-sm font-normal">
                {" "}
                {userData?.selectedDate}
              </span>
            </p>
          </div>

          {/* Add other user details here */}
        </div>

        {/* Selected Property Detail */}
        <div className="flex flex-col mt-8">
          <h3 className="font-bold text-xl">Selected Property Details:</h3>
          <div className="mt-4">
            <img src={selectedProperty?.list_view_photos[0]} alt="" />

            <div className="mt-4 space-y-3 text-md">
              <p className="font-bold">
                Id:{" "}
                <span className="text-sm font-normal">
                  {selectedProperty?.id}
                </span>{" "}
              </p>

              <p className="font-bold">
                Title:{" "}
                <span className="text-sm font-normal">
                  {" "}
                  {selectedProperty?.title}{" "}
                </span>
              </p>
              <p className="font-bold">
                Locality:{" "}
                <span className="text-sm font-normal">
                  {" "}
                  {selectedProperty?.locality}
                </span>
              </p>
              <p className="font-bold">
                Rent:{" "}
                <span className="text-sm font-normal">
                  {" "}
                  {selectedProperty?.rent}/ Month{" "}
                </span>
              </p>
              <p className="font-bold">
                Area:{" "}
                <span className="text-sm font-normal">
                  {" "}
                  {selectedProperty?.area} sq. ft{" "}
                </span>
              </p>
            </div>
          </div>

          {/* Display other property details */}
        </div>
        <Link to={"/mybookings"}>
          <button
            className="p-2 bg-black text-white mt-4 rounded-lg w-full"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>
        </Link>
      </div>
    </>
  );
};

export default ConfirmationDetail;
