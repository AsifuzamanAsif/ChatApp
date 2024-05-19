import {getDatabase, ref, remove } from "firebase/database";

function BlocklistItem({ data }) {
    const db = getDatabase();
  const handelUnblock = (key) => {
    remove(ref(db, "block/" + key));
  }
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={data.blockprofile} className="w-full" alt="pic" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-secondary font-semibold text-lg">
          {data.blockName}
        </h2>
      </div>
      <div className="ml-auto flex flex-col">
        <button
          onClick={()=>handelUnblock(data.key)}
          className="font-secondary font-normal text-lg">
          Unblock
        </button>
      </div>
    </div>
  );
}
export default BlocklistItem;
