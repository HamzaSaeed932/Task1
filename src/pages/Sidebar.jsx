import React, { useState } from "react";
import DashBoard from "../components/DashBoard";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import Password from "../components/Password";
const Sidebar = () => {
  const [btn, setBtn] = useState("DashBoard");
  return (
    <div className="flex flex-col h-screen">

      <nav className="flex justify-between h-20 items-center bg-purple-600 p-4 shadow-xl">
        <h1 className="text-white font-bold text-2xl">Welcome </h1>
        <Link to="/" className="cursor-pointer text-white font-bold">
          LOGOUT
        </Link>
      </nav>

      <section className="flex flex-1">

        <aside className="flex-1 border-r border-gray-300 w-[230px]  ">
          <ul>
            <li
              className="p-2 cursor-pointer my-2"
              onClick={(e) => {
                setBtn(e.target.innerText);
              }}
            >
              DashBoard
            </li>
            <li
              className=" p-2 cursor-pointer my-2"
              onClick={(e) => {
                setBtn(e.target.innerText);
              }}
            >
              Profile Setting
            </li>
            <li
              className=" p-2 cursor-pointer"
              onClick={(e) => {
                setBtn(e.target.innerText);
              }}
            >
              Change Password
            </li>
          </ul>
          <div></div>
        </aside>
          
        <div className="flex-4">
          {btn === "DashBoard" && <DashBoard />}
          {btn === "Profile Setting" && <Profile />}
          {btn === "Change Password" && <Password />}

        </div>
      </section>

    </div>
  );
};

export default Sidebar;
