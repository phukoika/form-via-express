import React, { useState, useEffect } from "react";
import About from "../components/About";
import { InputField } from "../components/input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { setAuthUser, authUser, setIsloggedIn, isLoggedIn } = useAuth();

  const handleLogoutUser = () => {
    sessionStorage.removeItem("userInfo");
    setAuthUser(null);
    setIsloggedIn(false);
    navigate("/");
  };
  return (
    <>
      <div className="absolute top-[90px] left-[30%] h-[200px]  w-[748px] flex flex-col justify-between">
        <h1 className="text-2xl font-medium text-white">TÌM KIẾM NỘI DUNG</h1>
        <div className="flex items-center justify-center h-[125px] bg-white rounded-md gap-x-4 px-4">
          <InputField
            id="search"
            name="search"
            type="text"
            label="Nhập thông tin cần tìm"
            placeholder="Tên người dùng, số điện thoại hoặc email..."
          ></InputField>
          <div className="h-[66px] flex items-end">
            <button
              type="button"
              className="text-white font-medium bg-primary rounded-md w-[120px] h-[42px]"
            >
              Tìm
            </button>
          </div>
        </div>
      </div>
      {authUser ? (
        <div className="absolute top-[90px] right-10 h-[200px] w-[200px]  text-center">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Xin chào bạn
          </h1>
          <p className="text-4xl text-white font-bold">{authUser?.shopName}</p>
          <div className="">
            <img
              src="/image.png"
              alt=""
              className="h-[107px] w-[102px] object-cover mx-auto my-4"
            />
          </div>
          <button
            onClick={handleLogoutUser}
            type="button"
            className="text-white font-medium bg-primary rounded-md p-2"
          >
            Thoát
          </button>
        </div>
      ) : (
        <div className="absolute top-[90px] right-10 h-[200px] w-[200px]  text-center ">
          <h1 className="text-4xl text-white font-bold mb-20">
            Welcome to VIA
          </h1>
          <div className="p-2 bg-primary rounded-md">
            <Link to="/" className="text-white font-medium ">
              Get started
            </Link>
          </div>
        </div>
      )}
      <div className="flex items-center  justify-between px-[80px]">
        <div className="h-[484px] w-[800px] border border-blue-500 flex-1">
          THIS IS HOME PAGES
        </div>
        <About></About>
      </div>
    </>
  );
};

export default HomePage;
