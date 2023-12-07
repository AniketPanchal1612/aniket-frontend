import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../layouts/Navbar";

const MyBookedPage = () => {
  const bookings = useSelector((state) => state.booking.bookings);

  if (!bookings || bookings.length === 0) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center pt-16 h-screen">
          <h2 className="text-2xl font-bold">My Bookings</h2>
          <p className="mt-4 text-lg">No bookings available</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className=" p-0 lg:p-4 space-y-6 pt-12 text-xs lg:text-base md:text-base">
        <h2 className="text-2xl font-bold mb-8 ml-4">My Bookings</h2>
        <div className="ml-0 lg:ml-8 md:ml-8 mt-8 border borded-gray-400 p-4 rounded-md">
          {bookings.map((booking, index) => (
            <div>
              <div key={index} className="booking-item flex flex-row space-x-2 lg:space-x-8">
                <div>
                  <img
                    src={booking?.property?.list_view_photos[0]}
                    className="w-32 h-32"
                    alt=""
                  />
                </div>

                {/* Display booking details */}
                <div className="space-y-4">
                  <p>User: {booking?.user?.username}</p>
                  <p>Email: {booking?.user?.email}</p>
                  <p>Property Title: {booking?.property?.title}</p>
                  <p>Rent: ₹ {booking?.property?.rent}/ Month</p>
                </div>
                {/* Display other booking details */}
              </div>
              <hr className="border border-gray-500 w-full mt-4 mb-4" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyBookedPage;
