import React from "react";
import MyGroupe from "../../components/MyGroup";
import Groups from "../../components/Groups";
import Friends from "../../components/Friends";
import Peoples from "../../components/Peoples";
import FrendRequests from "../../components/FriendRequests";
import BlockList from "../../components/BlockList";
function Home() {
  const userFromLocal = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="bg-slate-200 w-full">
      <div className="flex gap-6 py-6 px-6 h-1/2">
        <MyGroupe />
        <Groups />
        <Friends />
      </div>
      <div className="flex gap-6 py-6 px-6 h-1/2">
        <Peoples />
        <FrendRequests />
        <BlockList />
      </div>
    </div>
  );
}

export default Home;
