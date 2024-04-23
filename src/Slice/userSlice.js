import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loggeduser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { loggeduser } = userSlice.actions;

export default userSlice.reducer;
