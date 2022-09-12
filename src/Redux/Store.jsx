import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./Reducers"
 
// const store = configureStore({reducer:Reducers})

const store = configureStore({
    reducer:{post:PostReducer}
})
export default store