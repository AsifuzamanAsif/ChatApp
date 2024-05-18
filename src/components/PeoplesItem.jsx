import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const PeoplesItem = ({ userData }) => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [friendRequestList, setfriendReqest] = useState([]);
  const [friendtList, setfriendList] = useState([]);
  const [realtime,setRealtime] =useState(false)
  const handelRequest = (key, userName) => {
    setRealtime(!realtime)
    set(push(ref(db, "friendRequest/")), {
      senderName: user.displayName,
      senderId: user.uid,
      reciverName: userName,
      reciverId: key,
    });
  };

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().senderId + item.val().reciverId);
      });
      setfriendReqest(arr);
    });
  }, [realtime]);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().friendId + item.val().reciverId);
      });
      setfriendList(arr);
    });
  }, [realtime]);
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12">
        <img
          src={userData.profile_picture}
          alt="pic"
          className=" rounded-[50%] w-full"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">
          {userData.username}
        </h2>
      </div>
      {friendRequestList.includes(user.uid + userData.key) ? (
        <button className="ml-auto font-secondary font-normal text-lg text-[#32375C]">
          Cancel Request
        </button>
      ) : friendRequestList.includes(userData.key + user.uid) ? (
        <button className="ml-auto font-secondary font-normal text-lg text-[#32375C]">
          -
        </button>
      ) : friendtList.includes(userData.key + user.uid) ||
        friendtList.includes(user.uid + userData.key) ? (
        <button className="ml-auto font-secondary font-normal text-lg text-[#32375C]">
          Fridens
        </button>
      ) : (
        <button
          onClick={() => handelRequest(userData.key, userData.username)}
          className="ml-auto font-secondary font-normal text-lg text-[#32375C]"
        >
          Add Request
        </button>
      )}
    </div>
  );
};
export default PeoplesItem;
