import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { CgMoreVerticalO } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { loggeduser } from "../Slice/userSlice";
function Navber() {
  const user = useSelector((state) => state.userSlice.user);
  const location = useLocation().pathname;
  const disptch = useDispatch();
  const handelLogout = () => {
    localStorage.removeItem("user");
    disptch(loggeduser(null));
    window.location.reload();
  };
  return (
    <nav className="w-48 min-h-screen bg-slate-300 shadow-[6px_0px_10px_-7px_rgba(0,0,0,0.62)];">
      <div>
        <Link to="/Newsfeed">
          <img
            src="/ChatApp_Logo-removebg-preview.png"
            alt="Logo"
            className="w-48 text-center"
          />
        </Link>
      </div>
      <div className="pl-6">
        <ul className="flex flex-col gap-4 text-lg font-secondary font-semibold ">
          <li>
            <Link
              to="/"
              className={`${
                location == "/" && " bg-primary text-white "
              } flex items-center gap-3 py-3 px-3 rounded-lg w-fit`}
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/Chat"
              className={`${
                location == "/Chat" && "bg-primary text-white"
              } flex items-center gap-3 py-3 px-3 rounded-lg w-fit`}
            >
              <IoChatboxOutline />
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link
              to="/Group"
              className={`${
                location == "/Group" && "bg-primary text-white"
              } flex items-center gap-3 py-3 px-3 rounded-lg w-fit`}
            >
              <IoPeopleOutline />
              Group
            </Link>
          </li>
          <li>
            <Link
              to="/Friend"
              className={`${
                location == "/Friend" && "bg-primary text-white"
              } flex items-center gap-3 py-3 px-3 rounded-lg w-fit`}
            >
              <RiAccountCircleLine />
              Friends
            </Link>
          </li>
          <li>
            <Link
              to="/People"
              className={`${
                location == "/People" && "bg-primary text-white"
              } flex items-center gap-3 py-3 px-3 rounded-lg w-fit`}
            >
              <CgMoreVerticalO />
              People
            </Link>
          </li>
          <li className="flex mt-40">
            <Link
              to="/User"
              className="flex items-center gap-3 py-3 px-3 rounded-lg w-fit"
            >
              <img
                src={user?.photoURL}
                alt="userpic"
                className="w-[40px] h-[40px] rounded-[50%] border-solid"
              />
              <div>
                <p className="text-sm font-primary font-semibold text-primary">
                  {user?.displayName}
                </p>
                <p className="text-sm font-primary font-semibold text-primary">
                  Edit Profile
                </p>
              </div>
            </Link>
          </li>
        </ul>
        <Link>
          <button onClick={handelLogout} className="Btn">
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </div>
            <div className="text">Logout</div>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navber;
