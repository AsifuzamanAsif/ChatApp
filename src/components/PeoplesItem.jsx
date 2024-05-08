import { getDatabase, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
const PeoplesItem = ({ userData }) => {
    const db = getDatabase();
 const user = useSelector((state) => state.userSlice.user);


  const handelRequest = (key , userName) => {
    console.log(key);
    set(push(ref(db, "friendRequest/")), {
      senderName: user.displayName,
      senderId: user.uid,
      reciverName: userName,
      reciverId: key,
    });
  }
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
      <button onClick={()=>handelRequest(userData.key, userData.username)} className="ml-auto font-secondary font-normal text-lg text-[#32375C]">
        Add Request
      </button>
    </div>
  );
};
export default PeoplesItem;
