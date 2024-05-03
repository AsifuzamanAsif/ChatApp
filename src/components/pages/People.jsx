import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Title from "../Title";
import PeoplesItem from "../PeoplesItem";
import { getDatabase, ref, onValue } from "firebase/database";

function People() {
  const db = getDatabase();
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
  console.log(userList);
  return (
    <div className="w-full p-4 rounded-2xl bg-white px-80">
      <Title title="People" />
      <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
        <CiSearch className="text-2xl" />
        <input
          type="text"
          className="w-full outline-none text-xl"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-7 mt-7">
        {userList.map((item) => (
          <PeoplesItem userData={item} key={item.key} />
        ))}
      </div>
    </div>
  );
}
export default People;
