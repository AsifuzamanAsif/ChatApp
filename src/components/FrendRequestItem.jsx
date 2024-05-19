import { getDatabase, push, ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";

function FrendRequestItem({ reqList, frReqId }) {
  const user = useSelector((state) => state.userSlice.user);

  const db = getDatabase();
  const handelconfirm = (data, id) => {
    set(push(ref(db, "friends/")), {
      friendId: data.key,
      friendName: data.username,
      friendprofile: data.profile_picture,
      reciverId: user.uid,
      reciverName: user.displayName,
      reciverprofile: user.photoURL,
    });
    remove(ref(db, "friendRequest/" + id));
  };
  const handelcancel = (id) => {
    remove(ref(db, "friendRequest/" + id));
  };
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={reqList.profile_picture} alt="pic" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">
          {reqList?.username}
        </h2>
      </div>
      <div className="ml-auto flex flex-col">
        <button
          onClick={() => handelconfirm(reqList, frReqId)}
          className="px-3 bg-primary text-white rounded font-secondary font-normal text-lg"
        >
          Confirm
        </button>
        <button
          onClick={() => handelcancel(frReqId)}
          className="font-secondary font-normal text-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
export default FrendRequestItem;
