import React from "react";
  function User() {
    return (
      <div className="wrap font-primary bg-slate-600">
        <div className="profile ">
          <img src="/user.png" className="w-[80px] h-[70px]" />
          <div className="pt-3 ">
            <span className="profile_name font-primary">Kelvin Queiróz</span>
            <span className="at ">@_kelvinqueiroz</span>
          </div>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#" className="link">
                <i className="fab fa-youtube" /> See the latest video
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <i className="fab fa-youtube" /> Subscribe on YouTube channel
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default User;
