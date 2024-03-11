import React, { useState, useEffect, useContext } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsloggedIn] = useState(false);
  useEffect(() => {
    const userInfoString = sessionStorage.getItem("userInfo");
    if (userInfoString) {
      setAuthUser(JSON.parse(userInfoString));
      setIsloggedIn(true);
    } else {
      setAuthUser(null);
      setIsloggedIn(false);
    }
  }, []);
  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsloggedIn,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
