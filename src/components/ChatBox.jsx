import React from "react";
import { IoMdMore } from "react-icons/io";
import { RiVidiconLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
function ChatBox() {
  return (
    <div className="container bg-[#343541]">
      <div className="flex gap-4 px-4 py-4">
        <div>
          <img src="pic.png" alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-secondary font-semibold text-lg text-white">
            Paula Mora
          </h2>
        </div>
        <button className="ml-auto flex gap-5 items-center text-xl text-white">
          <IoMdCall />
          <RiVidiconLine />
          <IoMdMore />
        </button>
      </div>
      <div className="nav-bar"></div>
      <div className="messages-area">
        <div className="message one" />
        <div className="message two" />
        <div className="message three" />
        <div className="message four" />
        <div className="message five" />
        <div className="message six" />
        <div className="message seven" />
        <div className="message eight" />
        <div className="message nine" />
        <div className="message ten" />
        <div className="message eleven" />
        <div className="message twelve" />
        <div className="message thirteen" />
        <div className="message fourteen" />
        <div className="message fifteen" />
      </div>
      <div className="sender-area">
        <div className="input-place">
          <input
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