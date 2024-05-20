import React from "react";
import Title from "./Title";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import BlocklistItem from "./BlocklistItem";
function BlockList() {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [blockList, setblockList] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "block/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().blockById == user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setblockList(arr);
      setloading(false);
    });
  }, []);
  console.log(blockList);

  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white">
      <Title title="Block List" />

      <div className="flex flex-col  gap-4 mt-5">
        {loading ? (
          <div className="loader m-auto">
            <span className="loader-text">loading</span>
            <span className="load"></span>
          </div>
        ) : blockList.length > 0 ? (
          blockList.map((item) => <BlocklistItem key={item.key} data={item} />)
        ) : (
          <p className="text-center">No Blocked Account</p>
        )}
      </div>
    </div>
  );
}

export default BlockList;
