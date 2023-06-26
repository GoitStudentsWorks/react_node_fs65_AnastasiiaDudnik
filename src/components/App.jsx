import { Suspense, lazy } from 'react';
// import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
// import Description from "./description/description";
import AuthSection from './authSection/authSection';

const LoginPage = lazy(() => import('pages/loginPage/loginPage'));
const RegisterPage = lazy(() => import('pages/registerPage/registerPage'));
// const MainPage = lazy(() => import("pages/mainPage/mainPage"))

export const App = () => {
  // const dispatch = useDispatch()

  return (
    <Suspense fallback={null}>
      {/* Заміcть null має бути лоадер */}
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<AuthSection />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
