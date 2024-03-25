import React from "react";
import { GoHome } from "react-icons/go";
import { RiVidiconLine } from "react-icons/ri";
import { VscGame } from "react-icons/vsc";
import { RiGroupLine } from "react-icons/ri";
function Newsfeed() {
  return (
    <>
      <div className="container">
        <ul className="flex flex-row justify-around gap-5 mt-8 text-2xl">
          <li>
            <button>
              <GoHome />
            </button>
          </li>
          <li>
            <button>
              <RiVidiconLine />
            </button>
          </li>
          <li>
            <button>
              <VscGame />
            </button>
          </li>
          <li>
            <button>
              <RiGroupLine />
            </button>
          </li>
        </ul>
        <section className="container">
          <div className="main py-8 px-40">
            <h1>Asif zaman</h1>
            <img src="" alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Newsfeed;
