import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../slices/UserDetailSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../layouts/Navbar";
const UserInfoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormData = {
    username: "",
    address: "",
    contact: "",
    email: "",
    selectedDate: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message when the user starts typing
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    }

    // Update form errors
    setFormErrors(errors);

    // If there are no errors, handle form submission
    if (Object.keys(errors).length === 0) {
      dispatch(setUserData(formData));
      setFormData({ ...initialFormData });
      navigate(`/confirm`); // Assuming property.id holds the ID
    }
  };

  return (
    <>
      <Navbar />
      <div className=" max-w-md mx-auto mt-4 lg:mt-10 p-4 border rounded-md text-xs lg:text-base">
        <h2 className="text-2xl mb-4">User Information</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">
              User Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
            {formErrors.username && (
              <p className="text-red-500 mt-1">{formErrors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email Id
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
            {formErrors.email && (
              <p className="text-red-500 mt-1">{formErrors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block mb-1">
              Mobile Number
            </label>
            <input
              type="contact"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
            {formErrors.contact && (
              <p className="text-red-500 mt-1">{formErrors.contact}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">
              Address
            </label>
            <textarea
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
            {formErrors.address && (
              <p className="text-red-500 mt-1">{formErrors.address}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="selectedDate" className="block mb-1">
              Desire Booking Date
            </label>
            <input
              type="date"
              id="selectedDate"
              name="selectedDate"
              value={formData.selectedDate}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
            {formErrors.selectedDate && (
              <p className="text-red-500 mt-1">{formErrors.selectedDate}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md"
          >
            Confirm
          </button>
        </form>
      </div>
    </>
  );
};

export default UserInfoForm;
