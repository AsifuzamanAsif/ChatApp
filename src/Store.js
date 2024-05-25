import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import currentChatfriendInfo from "./Slice/currentChatfriendInfo";

export default configureStore({
  reducer: { userSlice, currentChatfriendInfo },
});
