import { IoMdMore } from "react-icons/io";

function GroupItems({ data, myGroup }) {
  console.log(data);
  return (
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
      <IoMdMore className="ml-auto cursor-pointer text-lg" />
    </div>
  );
}
export default GroupItems;
