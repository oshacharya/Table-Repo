import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";

const store = configureStore({
  reducer: {
    post: PostReducer,
    user: UserReducer,
  },
});
export default store;
