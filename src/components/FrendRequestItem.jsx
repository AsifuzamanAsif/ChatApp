import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
function FrendRequestItem() {
  const db = getDatabase();
  const [friendRequestList, setfriendReqest] = useState([]);

  useEffect(() => {
    let arr = []
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val())
      })
    });
  })

  return (
    <div className="flex gap-4">
      <div>
        <img src="pic.png" alt="pic" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">Paula Mora</h2>
      </div>
      <div className="ml-auto flex flex-col">
        <button className="px-3 bg-primary text-white rounded font-secondary font-normal text-lg">
          Confirm
        </button>
        <button className="font-secondary font-normal text-lg">Cancel</button>
      </div>
    </div>
  );
}
export default FrendRequestItem;
