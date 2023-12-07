import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedType: '',
  selectedBedroom: '',
  selectedBudget: '',
  selectedFurnishings: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterType: (state, action) => {
      state.selectedType = action.payload;
    },
    setFilterBedroom: (state, action) => {
      state.selectedBedroom = action.payload;
    },
    setFilterBudget: (state, action) => {
      state.selectedBudget = action.payload;
    },
    setFilterFurnishings: (state, action) => {
      state.selectedFurnishings = action.payload;
    },
    clearAllFilters: (state) => {
      return initialState; // Reset all filters to initial state
    },
  },
});

export const {
  setFilterType,
  setFilterBedroom,
  setFilterBudget,
  setFilterFurnishings,
  clearAllFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
