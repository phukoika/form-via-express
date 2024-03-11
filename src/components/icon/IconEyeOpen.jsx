import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const IconEyeOpen = ({ className = "", onClick = () => {} }) => {
  return (
    <span className={className} onClick={onClick}>
      <MdOutlineRemoveRedEye size={24} />
    </span>
  );
};

export default IconEyeOpen;
