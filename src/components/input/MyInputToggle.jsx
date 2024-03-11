import React, { useState } from "react";
import MyInput from "./MyInput";
import { IconEyeClose, IconEyeOpen } from "../icon";

const MyInputToggle = ({ ...props }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <>
      <MyInput {...props} type={togglePassword ? "text" : "password"}>
        {!togglePassword ? (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        )}
      </MyInput>
    </>
  );
};

export default MyInputToggle;
