import { Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Description from "./description/description";


const LoginPage = lazy(() => import("pages/loginPage/loginPage"))
const RegisterPage = lazy(() => import("pages/registerPage/registerPage"))
const MainPage = lazy(() => import("pages/mainPage/mainPage"))



export const App = () => {
  const dispatch = useDispatch()

  return (
    <Suspense fallback={null}>
      {/* Заміcть null має бути лоадер */}
    <Routes>
      <Route path='/' element={<PrivateRoute />}>
        <Route index element={<Description/>} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
    </Suspense>
  );
};
