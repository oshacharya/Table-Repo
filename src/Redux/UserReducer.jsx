import { getUser } from "./API";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});
export default userSlice.reducer;
