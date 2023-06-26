import { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { MainTemplate } from 'template/MainTemplate';

const LoginPage = lazy(() => import('pages/loginPage/loginPage'));
const RegisterPage = lazy(() => import('pages/registerPage/registerPage'));

export const App = () => {
  const dispatch = useDispatch();

  return (
    <Suspense fallback={null}>
      {/* Заміть null має бути лоадер */}
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<div>Main Page</div>} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
