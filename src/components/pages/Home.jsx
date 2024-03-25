import React from "react";
import MyGroupe from "../MyGroup";
import Groups from "../Groups";
import Friends from "../Friends";
import Peoples from "../Peoples";
import FrendRequests from "../FriendRequests";
import BlockList from "../BlockList";
function Home() {
  return (
    <div className="bg-slate-200 w-full">
      <div className="flex gap-6 py-6 px-6">
        <MyGroupe />
        <Groups />
        <Friends />
      </div>
      <div className="flex gap-6 py-6 px-6">
        <Peoples />
        <FrendRequests />
        <BlockList />
      </div>
    </div>
  );
}

export default Home;
