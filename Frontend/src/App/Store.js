import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Slice"

export default configureStore({
    reducer : {
        user : userReducer
    }
})