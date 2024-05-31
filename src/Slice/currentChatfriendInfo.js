import { createSlice } from "@reduxjs/toolkit";
export const friendInfoSlice = createSlice({
  name: "chatfriendinfo",
  initialState: {
    friendInfo: JSON.parse(localStorage.getItem("FriendInfo"))
      ? JSON.parse(localStorage.getItem("FriendInfo"))
      : null,
  },
  reducers: {
    currentFriendInfo: (state, action) => {
      state.friendInfo = action.payload;
    },
  },
});

export const { currentFriendInfo } = friendInfoSlice.actions;

export default friendInfoSlice.reducer;
