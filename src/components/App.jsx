import { Suspense, lazy, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'redux/restriktedRoute';
import MainLayout from 'pages/MainLayout/mainLayout';
import { PrivateRoute } from 'redux/privareRoute';
import UserForm from './userForm/userForm';

const LoginPage = lazy(() => import('pages/loginPage/loginPage'));
const RegisterPage = lazy(() => import('pages/registerPage/registerPage'));
const MainPage = lazy(() => import('pages/mainPage/MainPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFatching = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isFatching ? (
    isFatching
  ) : (
    <Suspense fallback={<p>Loading</p>}>
      {/* Заміть null має бути лоадер */}
      <Routes>
        <Route index element={<MainPage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/account"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/account" component={<LoginPage />} />
          }
        />
        <Route path="/" element={<PublicRoute />}>
          <Route
            path="main"
            element={
              <PrivateRoute redirectTo="/login" component={<MainLayout />} />
            }
          />
          <Route
            path="account"
            element={
              <PrivateRoute redirectTo="/login" component={<UserForm />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
