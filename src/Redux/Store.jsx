import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducers";

const store = configureStore({reducer:Reducers})

export default store