function Grouplist({data}) {
  const handelClick = () => {
     console.log(data);
   };
  return (
    <div
      onClick={handelClick}
      className="flex gap-4 mt-5 items-center cursor-pointer border-b"
    >
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src="group.png" alt="" />
      </div>
      <div>
        <button className="font-secondary font-semibold text-lg">
          {data?.groupName}
        </button>
        <p> Admin: {data.createBy}</p>
      </div>
      <p className="ml-auto font-secondary font-normal text-sm text-brand">
        10:30 PM
      </p>
    </div>
  );
}

export default Grouplist;
