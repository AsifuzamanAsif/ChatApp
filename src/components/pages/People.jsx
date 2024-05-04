import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Title from "../Title";
import PeoplesItem from "../PeoplesItem";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

function People() {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [userList, setuserList] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const starCountRef = ref(db, "user/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key !== user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
        setuserList(arr);
        setloading(false);
      });
    });
  }, []);
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
        {loading ? (
          <p>Loading Data...</p>
        ) : (
          userList.map((item) => <PeoplesItem userData={item} key={item.key} />)
        )}
      </div>
    </div>
  );
}
export default People;
