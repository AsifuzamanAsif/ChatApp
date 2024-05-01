import { createSlice } from "@reduxjs/toolkit";
// JSON.parse(localStorage.getItem("user"));
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    loggeduser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { loggeduser } = userSlice.actions;

export default userSlice.reducer;
