import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { AiOutlineLeft, AiOutlineCheck } from "react-icons/ai";

const ModalSendOtp = ({ handleChangeModal }) => {
  const [OTP, setOTP] = useState("");
  return (
    <div>
      <h1 className="font-semibold text-xl mb-6">NHẬP MÃ OTP</h1>
      <p className="text-[#10B981] text-center font-semibold my-5">
        MÃ OTP ĐÃ ĐƯỢC GỬI TỚI SỐ ĐIỆN THOẠI/ EMAIL
      </p>
      <OTPInput
        className="w-full justify-center  otp-input"
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={6}
        otpType="number"
      />
      <ResendOTP
        className="resend-otp"
        onResendClick={() => console.log("Resend clicked")}
      />
      <div className="flex items-center justify-center gap-x-4">
        <button
          onClick={() => handleChangeModal("FORGOT-PASSWORD")}
          className="flex items-center bg-gray-300 px-3 py-2 rounded-md font-medium gap-x-1"
        >
          <span>
            <AiOutlineLeft />
          </span>
          <span>Trở về</span>
        </button>
        <button
          onClick={() => handleChangeModal("SET-NEW-PASSWORD")}
          className="flex items-center bg-primary px-3 py-2 rounded-md font-medium text-white gap-x-1"
        >
          <span>
            <AiOutlineCheck />
          </span>
          <span>Thay đổi mật khẩu</span>
        </button>
      </div>
    </div>
  );
};
export default ModalSendOtp;
