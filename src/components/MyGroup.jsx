import { FaPen } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import GroupItems from "./GroupItems";
import { useState } from "react";
function MyGroup() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white relative">
      <div className="flex justify-between pb-4">
        <h2 className="title font-secondary font-semibold text-2xl">
          My Group
        </h2>
        <button onClick={() => setShow(true)} className="text-lg">
          <FaPen />
        </button>
      </div>
      <div className="py-3 px-3 border-2 border-slate-400 rounded-lg w-full flex items-center gap-4">
        <CiSearch className="text-2xl" />
        <input
          type="text"
          className="w-full outline-none text-xl"
          placeholder="Search"
        />
      </div>
      {show && (
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] rounded-2xl flex justify-center items-center">
          <div className="bg-white text-primary px-6 py-4 rounded-xl">
            <button 
              onClick={()=>setShow(false)}
            className="text-xl">
              <MdOutlineCancel />
            </button>
            <p className="text-center font-xxl border-b pb-2 mb-2">
              Create New Group
            </p>
            <label className="font-secondary text-lg">Group Name</label>
            <input
              type="text"
              placeholder="Group Name"
              className="border block px-2 py-2"
            />
            <button className="py-2 px-2 bg-primary text-white font-semibold rounded-xl mt-4">
              Create
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4 mt-5">
        <GroupItems />
        <GroupItems />
        <GroupItems />
        <GroupItems />
        <GroupItems />
        <GroupItems />
      </div>
    </div>
  );
}

export default MyGroup;
