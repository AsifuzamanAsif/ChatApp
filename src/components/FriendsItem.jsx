import { getDatabase, push, ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";

function FriendsItem({ data }) {
  const user = useSelector((state) => state.userSlice.user);
  const db = getDatabase();
  const handelUnfriend = (key) => {
    remove(ref(db, "friends/" + key));
    window.location.reload()
  };
  const handelBlock = (data) => {
    set(push(ref(db, "block/")), {
      blockById: user.uid,
      blockByName: user.displayName,
      blockByprofile: user.photoURL,
      blockId: data.friendId,
      blockName: data.friendName,
      blockprofile: data.friendImg,
    });
      remove(ref(db, "friends/" + data.key));
  }
return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={data?.friendImg} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">
          {data?.friendName}
        </h2>
      </div>
      <div className="ml-auto flex flex-col">
        <button
          onClick={() => handelUnfriend(data.key)}
          className="px-3 bg-primary text-white rounded font-secondary font-normal text-lg"
        >
          Unfriend
        </button>
        <button
          onClick={()=>handelBlock(data)}
          className="font-secondary font-normal text-lg">
          Block
        </button>
      </div>
    </div>
  );
}
export default FriendsItem;
