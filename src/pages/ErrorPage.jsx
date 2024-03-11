import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-[800px] border border-red-500 flex items-start justify-around mt-[60px]">
      <NavLink to="/">Back to home</NavLink>
      <h1 className="text-red-500 font-semibold text-3xl text-center ">
        This is 404 Page
      </h1>
    </div>
  );
};

export default ErrorPage;
