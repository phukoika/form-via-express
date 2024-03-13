import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MyLabel } from "./label";
import { MyInput, MyInputToggle } from "./input";
import { UserSchemaLogin } from "../schema/UserSchemaLogin";
import { Modal } from "antd";
import ModalForgotPassword from "./modal/ModalForgotPassword";
import ModalSendOtp from "./modal/ModalSendOtp";
import ModalSetNewPassword from "./modal/ModalSetNewPassword";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [status, setStatus] = useState("");
  const handleClick = () => {
    setIsShow(!isShow);
    setStatus("FORGOT-PASSWORD");
  };
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(UserSchemaLogin),
  });
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
        autoClose: 1000,
      });
    }
  }, [errors]);
  const handleChangeModal = (status) => {
    setStatus(status);
  };
  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://dev-fe-exam.viajsc.com/ExamUser/login",
        values
      );
      if (response.status === 200) {
        console.log("Login successful!");
        console.log("Response data:", response.data.content);
        toast.success("Login successful!", {
          pauseOnHover: false,
          delay: 0,
          autoClose: 1000,
        });
        sessionStorage.setItem(
          "userData",
          JSON.stringify(response.data.content)
        );

        navigate("/home");
      } else {
        console.log("Login unsuccessful. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  return (
    <>
      <div className="absolute top-[90px] left-[50%] h-[200px]  w-[748px] flex flex-col justify-between">
        <h1 className="text-2xl font-medium text-white">Đăng nhập ngay!</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-center h-[125px] bg-white rounded-md gap-x-4 px-4"
        >
          <div className="relative">
            <MyLabel htmlFor="userName" className="font-medium">
              Tên người dùng
            </MyLabel>
            <MyInput
              control={control}
              name="userName"
              placeholder="Nhập tên người dùng"
              id="userName"
            ></MyInput>
          </div>
          <div className="relative">
            <MyLabel htmlFor="password" className="font-medium">
              Mật khẩu
            </MyLabel>
            <MyInputToggle
              name="password"
              id="password"
              placeholder="Nhập mật khẩu..."
              control={control}
            ></MyInputToggle>
          </div>
          <div className="h-[66px] flex items-end">
            <button
              type="submit"
              className="text-white font-medium bg-primary rounded-md w-[120px] h-[42px]"
            >
              {isSubmitting ? (
                <div className="mx-auto w-5 h-5 border-4 border-white border-t-4 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Đăng nhập"
              )}
            </button>
          </div>
        </form>
        <div className=" flex justify-end">
          <span
            className="text-lg text-white text-end cursor-pointer"
            onClick={handleClick}
          >
            Quên mật khẩu
          </span>
        </div>
      </div>
      <Modal footer={false} open={isShow} onCancel={() => setIsShow(!isShow)}>
        {status === "FORGOT-PASSWORD" && (
          <ModalForgotPassword
            handleChangeModal={handleChangeModal}
          ></ModalForgotPassword>
        )}
        {status === "SEND-OTP" && (
          <ModalSendOtp handleChangeModal={handleChangeModal}></ModalSendOtp>
        )}
        {status === "SET-NEW-PASSWORD" && (
          <ModalSetNewPassword
            handleCancel={() => setIsShow(!isShow)}
          ></ModalSetNewPassword>
        )}
      </Modal>
    </>
  );
};

export default SignIn;
