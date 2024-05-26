import { useEffect, useState } from "react";
import Title from "./Title";
import { CiSearch } from "react-icons/ci";
import GroupItems from "./GroupItems";
import { getDatabase, onValue, ref } from "firebase/database";
function Groups() {
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
    <div className="w-1/3 p-4 rounded-2xl bg-white shadow-lg overflow-hidden">
      <Title title="Group"/>
      <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
        <CiSearch className="text-2xl" />
        <input
          type="text"
          className="w-full outline-none text-xl"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5 overflow-y-scroll">
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
  );
}

export default Groups;
