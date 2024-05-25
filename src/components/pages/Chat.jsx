import React, { useEffect, useState } from "react";
import ChatList from "../ChatList";
import ChatBox from "../ChatBox";
import { FaSearch } from "react-icons/fa";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

function Chat() {
   const db = getDatabase();
   const user = useSelector((state) => state.userSlice.user);
  const [friendtList, setfriendList] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().friendId == user.uid) {
          arr.push({
            friendId: item.val().reciverId,
            friendName: item.val().reciverName,
            friendImg: item.val().reciverprofile,
            key: item.key,
          });
        } else if (item.val().reciverId == user.uid) {
          arr.push({
            friendId: item.val().friendId,
            friendName: item.val().friendName,
            friendImg: item.val().friendprofile,
            key: item.key,
          });
        }
      });
      setfriendList(arr);
      setloading(false);
    });
  }, []);
  console.log(friendtList);
  return (
    <div className="flex w-full h-screen">
      <div className="h-full bg-slate-200 flex flex-col gap-4 p-5 w-2/5">
        <h2 className="font-semibold font-secondary text-xl pb-4 border-b">
          Chat
        </h2>
        <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
          <FaSearch className="text-2xl" />
          <input
            type="text"
            className="w-full outline-none bg-inherit text-xl"
            placeholder="Search"
          />
        </div>
        {loading ? (
          <div className="loader m-auto">
            <span className="loader-text">loading</span>
            <span className="load"></span>
          </div>
        ) : friendtList.length > 0 ? (
          friendtList.map((item) => <ChatList data={item} />)
        ) : (
          <p className="text-center">No Friends Available</p>
        )}
      </div>
      <ChatBox />
    </div>
  );
}

export default Chat;
