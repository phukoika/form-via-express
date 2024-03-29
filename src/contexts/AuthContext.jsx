import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const userDataString = sessionStorage.getItem("userData");

  const [user, setUser] = useState(
    userDataString ? JSON.parse(userDataString) : "null"
  );
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within a AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
