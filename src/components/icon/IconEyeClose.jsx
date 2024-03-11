import React from "react";
import { IoMdEyeOff } from "react-icons/io";

const IconEyeClose = ({ className = "", onClick = () => {} }) => {
  return (
    <span className={className} onClick={onClick}>
      <IoMdEyeOff size={24} />
    </span>
  );
};

export default IconEyeClose;
