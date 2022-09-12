import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default postSlice.reducer;
// const initialState = 0;

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "Loading": {
//       data: action.payload;
//     }
//     case "Success": {
//       data: action.payload;
//     }
//     case "Failure": {
//       data: action.payload;
//     }
//   }
// };
