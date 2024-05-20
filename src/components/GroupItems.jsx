function GroupItems({ data }) {
  console.log(data);
  return (
    <div className="flex gap-4">
      <div>
        <img src="pic.png" alt="" />
      </div>
      <div>
        <h2 className="font-secondary font-semibold text-lg">
          {data?.groupName}
        </h2>
        <p className="font-secondary text-brand font-normal text-sm">
        Admin:  {data?.createBy}
        </p>
      </div>
      <p className="ml-auto font-secondary font-normal text-sm text-brand">
        10:30 PM
      </p>
    </div>
  );
}
export default GroupItems;
