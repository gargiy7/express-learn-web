import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    addUserProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser,addUserProduct , removeUser } = userSlice.actions;

export default userSlice.reducer;
