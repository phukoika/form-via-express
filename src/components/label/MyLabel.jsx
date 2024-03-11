import React from "react";

const MyLabel = ({ children, htmlFor = "" }) => {
  return (
    <label htmlFor={htmlFor} className="font-medium">
      {children}
    </label>
  );
};

export default MyLabel;
