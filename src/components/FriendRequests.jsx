import React, { useEffect, useState } from "react";
import Title from "./Title";
import { getDatabase, ref, onValue } from "firebase/database";
import FrendRequestItem from "./FrendRequestItem";
import { useSelector } from "react-redux";
function FrendRequests() {
  const user = useSelector((state) => state.userSlice.user);
  const db = getDatabase();
  const [friendRequestList, setfriendReqest] = useState([]);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().reciverId == user.uid) {
          arr.push({...item.val(),key:item.key});
        }
      });
      setfriendReqest(arr);
    });
  }, []);

  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white">
      <Title title="Friend Request" />

      <div className="flex flex-col  gap-4 mt-5">
        {friendRequestList.map((item) => {
          <FrendRequestItem key={item.key} reqList={item} />;
        })}
      </div>
    </div>
  );
}

export default FrendRequests;
