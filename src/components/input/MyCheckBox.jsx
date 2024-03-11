import React from "react";
import { useController } from "react-hook-form";

const MyCheckBox = ({ control, id, children, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div className="h-[44px] flex items-center gap-x-2">
      <input
        type="checkbox"
        {...field}
        {...props}
        className="h-5 w-5 accent-primary"
      />
      {children}
    </div>
  );
};

export default MyCheckBox;
