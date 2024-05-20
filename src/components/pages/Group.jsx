import { useEffect, useState } from "react";
import ChatBox from "../ChatBox";
import { FaSearch } from "react-icons/fa";
import { getDatabase, onValue, ref } from "firebase/database";
import GroupItems from "../GroupItems";
function Group() {
    const db = getDatabase();
    const [groupList, setGroupList] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
      const starCountRef = ref(db, "group/");
      let arr = [];
      onValue(starCountRef, (snapshot) => {
        snapshot.forEach((item) => {
          arr.push({ ...item.val(), key: item.key });
        });
        setGroupList(arr);
        setloading(false);
      });
    }, []);
  return (
    <div className="bg-slate-200 w-full flex">
      <div className="px-6">
        <h2 className="font-semibold font-secondary text-xl py-7">Group</h2>
        <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
          <FaSearch className="text-2xl" />
          <input
            type="text"
            className="w-full outline-none bg-inherit text-xl"
            placeholder="Search"
          />
        </div>
        <div className="py-6">
          {loading ? (
            <div className="loader m-auto">
              <span className="loader-text">loading</span>
              <span className="load"></span>
            </div>
          ) : groupList.length > 0 ? (
            groupList.map((item) => <GroupItems key={item.key} data={item} />)
          ) : (
            <p className="text-center">No Group Available</p>
          )}
        </div>
      </div>
      <div className="w-full  h-screen">
        <ChatBox />
      </div>
    </div>
  );
}

export default Group;
