import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    username: '',
    address: '',
    contact: '',
    email: '',
    selectedDate:''
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
