import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="h-[430px] w-full relative">
        <img
          src="/header.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="w-[271px] h-[271px] absolute left-0 top-[-64px]">
          <NavLink to="/">
            <img
              src="/logo.png"
              alt="logo"
              className="w-full h-full object-cover "
            />
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
