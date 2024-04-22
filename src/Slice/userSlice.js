import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loggeduser: (state, payload) => {
      console.log(payload);
      state.user += action.payload;
    },
  },
});
export const { loggeduser } = userSlice.actions;

export default userSlice.reducer;
