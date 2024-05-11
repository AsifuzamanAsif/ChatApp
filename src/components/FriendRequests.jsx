import React, { useEffect, useState } from "react";
import Title from "./Title";
import { getDatabase, ref, onValue } from "firebase/database";
import FrendRequestItem from "./FrendRequestItem";
import { useSelector } from "react-redux";
function FrendRequests() {
  const user = useSelector((state) => state.userSlice.user);
  const db = getDatabase();
  const [FriendRequestList, setfriendReqest] = useState([]);
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, "user/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
        setuserList(arr);
      });
    });
  }, []);
  console.log(user);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().reciverId == user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
        console.log(item.val());
      });
      setfriendReqest(arr);
    });
  }, []);

  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white">
      <Title title="Friend Request" />

      {FriendRequestList.map((reqId) =>
        userList.map(
          (item) =>
            reqId.senderId == item.key && (
              <FrendRequestItem key={item.key} reqList={item} />
            )
        )
      )}
    </div>
  );
}

export default FrendRequests;
