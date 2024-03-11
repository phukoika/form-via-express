import React, { useEffect } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const AuthenticationPage = () => {
  return (
    <div>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default AuthenticationPage;
