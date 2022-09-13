import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async (val) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${val}`
  ).then((response) => {
    return response.json();
  });
  return response;
});

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
});
