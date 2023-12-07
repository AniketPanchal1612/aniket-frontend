import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './slices/PropertyDataSlice'
import SingleProperty from './slices/FetchSinglePropertySlice'
import userReducer from './slices/UserDetailSlice'
import bookingReducer from './slices/BookingSlice'
import searchReducer from './slices/SearchSlice'
import filterReducer from './slices/FilterSlice'
const store = configureStore({
    reducer:{
        data: dataReducer,
        singleProperty: SingleProperty,
        user: userReducer,
        booking: bookingReducer,
        search: searchReducer,
        filters: filterReducer,
    }
})

export default store;