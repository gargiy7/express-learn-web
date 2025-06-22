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
    removeUserProduct: (state, action) => {
      let index = state.products.indexOf(action.payload); // Finds the index of product
      if (index > -1) {
        state.products.splice(index, 1); // Removes 1 element at that index
      }
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, addUserProduct, removeUser, removeUserProduct } =
  userSlice.actions;

export default userSlice.reducer;
