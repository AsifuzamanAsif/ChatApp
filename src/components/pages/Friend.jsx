/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { CiSearch } from "react-icons/ci";
import Title from "../Title";
import FriendsItem from "../FriendsItem";
import { useSelector } from "react-redux";
function Friend() {
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

  return (
    <div className="w-full p-4 bg-gray-300 px-80">
      <Title title="Friends" />
      <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
        <CiSearch className="text-2xl" />
        <input
          type="text"
          className="w-full outline-none text-xl bg-transparent"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-7 mt-7">
        {loading ? (
          <div className="loader m-auto">
            <span className="loader-text">loading</span>
            <span className="load"></span>
          </div>
        ) : friendtList.length > 0 ? (
          friendtList.map((item) => <FriendsItem data={item} />)
        ) : (
          <p className="text-center">No Friends Available</p>
        )}
      </div>
    </div>
  );
}

export default Friend;
