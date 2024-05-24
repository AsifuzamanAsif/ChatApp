import { getDatabase, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { useSelector } from "react-redux";
function GroupItems({ data, myGroup }) {
  const [show, setShow] = useState(false);
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [friendtList, setfriendList] = useState([]);
  const handelClick = () => {
    if (myGroup) {
      setShow(true);
    }
  };

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
    });
  }, []);

  const handelAdd = (data, friend) => {
    console.log(data);
    console.log(friend);

    set(ref(db, "group/" + data.key), {
      groupName: data.groupName,
      createBy: data.createBy,
      createById: data.createById,
      members: [
        {
          friendName: friend.friendName,
          friendId: friend.friendId,
          friendImg: friend.friendImg,
        },
      ],
    });
  };
  return (
    <div>
      {show && (
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] rounded-2xl flex justify-center items-center">
          <div className="bg-white text-primary px-6 py-4 rounded-xl">
            <button onClick={() => setShow(false)} className="text-xl">
              <MdOutlineCancel />
            </button>
            <p className="text-center font-xxl border-b pb-2 mb-2">
              Add Friends
            </p>
            {friendtList.length > 0 ? (
              friendtList.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={item?.friendImg} alt="" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="font-secondary font-semibold text-lg">
                      {item?.friendName}
                    </h2>
                  </div>
                  <button
                    onClick={() => handelAdd(data, item)}
                    className="py-2 px-4 bg-primary rounded-xl text-white"
                  >
                    Add
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center">No Friends Available</p>
            )}
          </div>
        </div>
      )}
      <div className="flex gap-4 items-center">
        <div>
          <img src="pic.png" alt="" />
        </div>
        <div>
          <h2 className="font-secondary font-semibold text-lg">
            {data?.groupName}
          </h2>
          <p className="font-secondary text-brand font-normal text-sm">
            Admin: {data?.createBy}
          </p>
        </div>
        <IoMdMore
          onClick={handelClick}
          className="ml-auto cursor-pointer text-lg"
        />
      </div>
    </div>
  );
}
export default GroupItems;
