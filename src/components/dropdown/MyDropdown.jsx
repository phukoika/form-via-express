import React from "react";
import { useController } from "react-hook-form";

const MyDropdown = ({
  handleChange,
  control,
  data,
  children,
  prefix,
  ...props
}) => {
  const { field } = useController({
    control: control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div className="h-[44px]">
      <select
        {...field}
        {...props}
        onChange={handleChange}
        className="w-full h-full border border-gray-300 rounded-md px-1 outline-none"
      >
        <option value="" className="text-gray-300" disabled hidden>
          {children}
        </option>
        {data.map((option) => (
          <option
            key={option[`${prefix}_id`]}
            id={option[`${prefix}_id`]}
            value={option[`${prefix}_name`]}
          >
            {option[`${prefix}_name`]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MyDropdown;
