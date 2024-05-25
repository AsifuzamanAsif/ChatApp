import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { useSelector } from "react-redux";
function GroupItems({ data, myGroup }) {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [friendtList, setfriendList] = useState([]);
  const [groupmemberList, setGroupMemberList] = useState([]);
  const [show, setShow] = useState(false);
  const [showAddmember, setShowAddmember] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
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
    set(push(ref(db, "groupmembers/")), {
      groupName: data.groupName,
      groupId: data.key,
      createBy: data.createBy,
      createById: data.createById,
      memberName: friend.friendName,
      memberId: friend.friendId,
      memberImg: friend.friendImg,
    });
  };

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "groupmembers/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (data.key == item.val().groupId) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setGroupMemberList(arr);
      // setloading(false);
    });
  }, []);

  console.log(groupmemberList);

  return (
    <div>
      {show && (
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] rounded-2xl flex justify-center items-center">
          <div className="bg-white text-primary px-6 py-4 rounded-xl">
            <button onClick={() => setShow(false)} className="text-xl">
              <MdOutlineCancel />
            </button>
            <br />
            <button
              onClick={() => {
                setShowInfo(true);
                setShow(false);
              }}
              className="titel text-center text-xl border-b pb-2 mb-2"
            >
              Group Info
            </button>
            <br />
            <button
              onClick={() => {
                setShowAddmember(true);
                setShow(false);
              }}
              className="title text-center text-xl  border-b pb-2 mb-2"
            >
              Add Friends
            </button>
          </div>
        </div>
      )}
      {showAddmember && (
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] rounded-2xl flex justify-center items-center">
          <div className="bg-white text-primary px-6 py-4 rounded-xl">
            <button onClick={() => setShowAddmember(false)} className="text-xl">
              <MdOutlineCancel />
            </button>
            <p className="text-center text-xl border-b pb-2 mb-2">
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
      {showInfo && (
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] rounded-2xl flex justify-center items-center">
          <div className="bg-white text-primary px-6 py-4 rounded-xl">
            <button onClick={() => setShowInfo(false)} className="text-xl">
              <MdOutlineCancel />
            </button>
            <p className="text-center text-xl border-b pb-2 mb-2">
              {data?.groupName}
            </p>
            {groupmemberList.length > 0 ? (
              groupmemberList.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={item?.memberImg} alt="" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="font-secondary font-semibold text-lg">
                      {item?.memberName}
                    </h2>
                  </div>
                  <button
                    onClick={() => handelAdd(data, item)}
                    className="py-2 px-4 bg-primary rounded-xl text-white"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center">No Member Available</p>
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
