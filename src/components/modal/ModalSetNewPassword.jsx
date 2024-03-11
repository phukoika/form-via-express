import React, { useEffect } from "react";
import { MyLabel } from "../label";
import { MyInputToggle } from "../input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const passwordValitation = yup.object({
  password: yup
    .string()
    .min(9, "Password must be at least 9 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character (!@#$%^&*)"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const ModalSetNewPassword = ({ handleCancel }) => {
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(passwordValitation),
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
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(data);
        toast.success("Thay đổi mật khẩu thành công", {
          pauseOnHover: false,
          delay: 0,
          autoClose: 1000,
        });
        handleCancel();
      }, 1000);
    });
  }
  return (
    <div>
      <h1 className="font-semibold text-xl mb-6">THIẾT LẬP MẬT KHẨU MỚI</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <MyLabel htmlFor="password3" className="font-medium">
            Mật khẩu mới
          </MyLabel>
          <MyInputToggle
            name="password"
            id="password3"
            placeholder="Nhập mật khẩu..."
            control={control}
          ></MyInputToggle>
        </div>
        <div className="relative mt-5">
          <MyLabel htmlFor="cfpassword3" className="font-medium">
            Xác nhận mật khẩu mới
          </MyLabel>
          <MyInputToggle
            name="confirmPassword"
            id="cfpassword3"
            placeholder="Nhập mật khẩu..."
            control={control}
          ></MyInputToggle>
        </div>
        <button
          type="submit"
          className="text-white font-medium bg-primary rounded-md px-3 py-2 block mx-auto my-5"
        >
          {isSubmitting && (
            <span className="mx-auto block w-5 h-5 border-4 border-white border-t-4 border-t-transparent rounded-full animate-spin"></span>
          )}
          Thiết lập
        </button>
      </form>
    </div>
  );
};

export default ModalSetNewPassword;
