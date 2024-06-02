import { useEffect, useState } from "react";
import Title from "./Title";
import { CiSearch } from "react-icons/ci";
import PeoplesItem from "./PeoplesItem";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

function Peoples() {
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
    <div className="w-1/3 p-4 rounded-2xl bg-white">
      <Title title="People" />
      <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
        <CiSearch className="text-2xl" />
        <input
          type="text"
          className="w-full outline-none text-xl"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {loading ? (
          <div className="loader flex justify-center items-center m-auto">
            <span className="loader-text">loading</span>
            <span className="load"></span>
          </div>
        ) : (
          userList.map((item) => <PeoplesItem userData={item} key={item.key} />)
        )}
      </div>
    </div>
  );
}
export default Peoples;
