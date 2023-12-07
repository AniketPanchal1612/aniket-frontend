
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchPropertyById = createAsyncThunk(
  'property/fetchPropertyById',
  async (id, thunkAPI) => {
    try {
      const response = await fetch('https://mocki.io/v1/c1b8d087-971c-472f-870c-47185f710c17'); 
      const data = await response.json();
      // console.log(data)
      
      const houses = data?.houses || [];
      console.log(houses)
     
      console.log(id)
      // const property = houses.find((house) => house.id === id);
      const idToCompare = parseInt(id, 10); // Converting 'id' to an integer

      const property = houses.find((house) => {
        const houseId = parseInt(house.id, 10); // Converting house.id to an integer
        return houseId === idToCompare; // Comparing the IDs as numbers
      });

      if (property) {
        // If found, return the property
        return property;
      } else {
        // If not found, handle the error (you can customize this based on your logic)
        throw new Error('Property not found');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create a slice for single property handling
const singlePropertySlice = createSlice({
  name: 'singleProperty',
  initialState: {
    property: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPropertyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.loading = false;
        state.property = action.payload;
      })
      .addCase(fetchPropertyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch property data';
      });
  },
});

export default singlePropertySlice.reducer;
