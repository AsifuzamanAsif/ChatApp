import React from "react";

function User() {
  return (
    <div className="wrap font-primary">
      <div className="profile ">
        <img
          src="https://images.unsplash.com/photo-1687462310643-e993a3f09102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb3RhaXQlMjBpbWd8ZW58MHx8MHx8fDA%3D"
          className="photo w-[80px] h-[80px]"
        />
        <div className="pt-3 ">
          <span className="profile_name font-primary">Kelvin Queiróz</span>
          <span className="at text-white">@_kelvinqueiroz</span>
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
