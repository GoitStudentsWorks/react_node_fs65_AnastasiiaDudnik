import { Suspense, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import { MainTemplate } from 'template/MainTemplate';

const LoginPage = lazy(() => import('pages/loginPage/loginPage'));
const RegisterPage = lazy(() => import('pages/registerPage/registerPage'));
const MainPage = lazy(() => import('pages/mainPage/MainPage'));

export const App = () => {
  // const dispatch = useDispatch();

  return (
    <Suspense fallback={null}>
      {/* Заміть null має бути лоадер */}
      <Routes>
        <Route path="/" element={<PublicRoute/>}>
            <Route index element={<MainPage/>} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
