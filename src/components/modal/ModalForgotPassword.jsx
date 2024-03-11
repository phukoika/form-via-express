import React from "react";
import { MyLabel } from "../label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MyInput } from "../input";
import { useEffect } from "react";
import { toast } from "react-toastify";

const EmailValidator = yup.object({
  email: yup
    .string()
    .email("Vui lòng nhập đúng định dạng email")
    .required("Vui lòng nhập email"),
});

const ModalForgotPassword = ({ handleChangeModal }) => {
  const {
    setValue,
    reset,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(EmailValidator),
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
  function onSubmit(data) {
    // return promise that resolves after 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        handleChangeModal("SEND-OTP");
      }, 1000);
    });
  }

  return (
    <div>
      <h1 className="font-semibold text-xl mb-6">YÊU CẦU THAY ĐỔI MẬT KHẨU</h1>
      <form onSubmit={handleSubmit(onSubmit)} action="" className="">
        <MyLabel htmlFor="email2" className="text-base">
          Email/ Số điện thoại
        </MyLabel>
        <MyInput
          control={control}
          name="email"
          placeholder="Nhập email hoặc số điện thoại"
          id="email2"
        ></MyInput>
        <p className="text-center text-base m-5">
          Bạn vui lòng kiểm tra hòm thư đến hoặc mục tin nhắn trên điện thoại để
          lấy mã OTP
        </p>
        <button
          type="submit"
          className="text-white font-medium bg-primary rounded-md px-3 py-2 block mx-auto"
        >
          {isSubmitting && (
            <span className="mx-auto block w-5 h-5 border-4 border-white border-t-4 border-t-transparent rounded-full animate-spin"></span>
          )}
          Gửi yêu cầu
        </button>
      </form>
    </div>
  );
};

export default ModalForgotPassword;
