import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Suspense, lazy } from "react";

const Header = lazy(() => import("./components/header/Header"));
const AuthenticationPage = lazy(() => import("./pages/AuthenticationPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Slider = lazy(() => import("./components/slider/Slider"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
function App() {
  return (
    <>
      <AuthProvider>
        <Suspense>
          <Header></Header>
          <Routes>
            <Route path="/home" element={<HomePage></HomePage>}></Route>
            <Route
              path="/"
              element={<AuthenticationPage></AuthenticationPage>}
            ></Route>
            <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
          </Routes>
          <Slider></Slider>
          <Footer></Footer>
        </Suspense>
      </AuthProvider>
    </>
  );
}

export default App;
