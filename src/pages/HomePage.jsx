import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import About from "../components/about/About";
import { MyInput } from "../components/input";
import { useForm } from "react-hook-form";
import { MyLabel } from "../components/label";

const HomePage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const { control } = useForm();
  const handleLogoutUser = () => {
    setUser(null);
    navigate("/");
  };
  useEffect(() => {
    if (user) {
      setName(user?.shopName);
    } else {
      setName("");
    }
  }, []);
  return (
    <>
      <div className="absolute top-[90px] left-[30%] h-[200px]  w-[748px] flex flex-col gap-y-4">
        <h1 className="text-2xl font-medium text-white">TÌM KIẾM NỘI DUNG</h1>
        <div className="bg-white p-6 rounded-md flex items-end gap-x-4">
          <div className="flex-1">
            <MyLabel htmlFor="search">Nhập thông tin cần tìm</MyLabel>
            <MyInput
              control={control}
              id="search"
              name="search"
              placeholder="Tên người dùng, số điện thoại hoặc email..."
            ></MyInput>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="text-white font-medium bg-primary rounded-md w-[60px] h-[42px]"
            >
              Tìm
            </button>
          </div>
        </div>
      </div>
      {user ? (
        <div className="absolute top-[90px] right-10 h-[200px] w-[200px]  text-center">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Xin chào bạn
          </h1>
          <p className="text-4xl text-white font-bold">{name}</p>
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
            <NavLink to="/" className="text-white font-medium ">
              Get started
            </NavLink>
          </div>
        </div>
      )}
      <div className="flex items-center  justify-between px-[80px]">
        <div className="h-[484px] w-[800px] bg-white flex-1 flex items-center justify-center">
          <div className="">
            <h1 className="text-primary font-semibold text-lg">
              BẠN ĐÃ ĐĂNG NHẬP THÀNH CÔNG
            </h1>
            <p className="font-medium">
              Chào mừng <span className="text-primary">{name}</span> đã quay trở
              lại hệ thống
            </p>
          </div>
        </div>
        <About></About>
      </div>
    </>
  );
};

export default HomePage;
