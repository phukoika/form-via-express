import React from "react";
import { useController } from "react-hook-form";

const MyInput = ({ handleChange, control, children, ...props }) => {
  const { field } = useController({
    control,
    handleChange: handleChange,
    name: props.name,
    defaultValue: "",
  });
  return (
    <>
      <input
        className="relative w-full outline-none border border-gray-300 p-2 rounded-md pr-10"
        {...field}
        {...props}
      />
      {children ? (
        <div className="absolute right-4 top-1/2 cursor-pointer">
          {children}
        </div>
      ) : null}
    </>
  );
};

export default MyInput;
