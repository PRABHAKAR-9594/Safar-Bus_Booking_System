import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Slice";
import filterReducer from "../Features/FilterSlice"

export default configureStore({
    reducer : {
        user : userReducer,
        filter : filterReducer,
    }
})