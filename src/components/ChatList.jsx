import React from "react";
function ChatList() {
  return (
    <div className="flex gap-4 w-[400px] mt-5">
      <div>
        <img src="pic.png" alt="" />
      </div>
      <div>
        <button className="font-secondary font-semibold text-lg">Paula Mora</button>
        <p className="font-secondary text-brand font-normal text-sm">
          Love You.....
        </p>
      </div>
      <p className="ml-auto font-secondary font-normal text-sm text-brand">
        10:30 PM
      </p>
    </div>
  );
}

export default ChatList;
