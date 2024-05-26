import { IoMdMore } from "react-icons/io";
import { RiVidiconLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { useSelector } from "react-redux";
import { useState } from "react";
function ChatBox() {
  const [chat, setChat] = useState("")
  const friend = useSelector(
    (action) => action.currentChatfriendInfo.friendInfo
  );
  console.log(chat);
  return (
    <div className="chatbox bg-[#343541] w-3/5 pb-4 mx-8 mt-8">
      <div className="flex p-3 gap-4 items-center border-b">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={friend?.friendImg} alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-secondary font-semibold text-lg text-white">
            {friend?.friendName}
          </h2>
        </div>
        <button className="ml-auto flex gap-5 items-center text-xl text-white">
          <IoMdCall />
          <RiVidiconLine />
          <IoMdMore />
        </button>
      </div>
      <div className="nav-bar"></div>
      <div className="h-full px-4">
        {/* sender box */}
        <div className="my-2 max-w-[60%] w-fit rounded-xl rounded-br-sm py-2 px-3 bg-white text-primary ml-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            voluptatibus distinctio cupiditate doloribus consequatur. Laborum
            reiciendis corrupti aut quod possimus illum temporibus ducimus
            repellendus eius. Commodi nulla dolor a ratione?
          </p>
        </div>
        {/* Reciver box */}
        <div className="my-2 max-w-[60%] w-fit rounded-xl rounded-bl-sm py-2 px-3 bg-white text-primary">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            explicabo sequi autem dolore hic! Facilis consequatur perferendis
            eum nobis natus nemo consectetur tenetur harum, animi totam, nam
            itaque voluptatem? Voluptatibus.
          </p>
        </div>
      </div>
      <div className="sender-area">
        <div className="input-place">
          <input
            onChange={(e) => setChat(e.target.value)}
            placeholder="Send a message."
            className="send-input"
            type="text"
          />
          <div className="send">
            <svg
              className="send-icon"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    fill="#6B6C7B"
                    d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default ChatBox;
