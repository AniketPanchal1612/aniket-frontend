// bookingSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [], // Initialize an empty array to hold multiple booking details
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
