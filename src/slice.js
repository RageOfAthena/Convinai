import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
};
export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    update: (state, action) => {
      state.user = action.payload.user;
    },
  },
});
export const authActions = slice.actions;
export default slice.reducer;
