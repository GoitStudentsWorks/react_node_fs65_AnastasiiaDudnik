import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'redux/restriktedRoute';
import { MainLayout } from 'pages/MainLayout/mainLayout';
import { PrivateRoute } from 'redux/privareRoute';
import { ColorRing } from 'react-loader-spinner';

const LoginPage = lazy(() => import('pages/loginPage/loginPage'));
const RegisterPage = lazy(() => import('pages/registerPage/registerPage'));
const MainPage = lazy(() => import('pages/mainPage/MainPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const Account = lazy(() => import('../pages/accountPage/accountPage'));
const Calendar = lazy(() => import('../pages/calendarPage/calendarPage'));
const Statistics = lazy(() => import('../pages/statisticsPage/statisticsPage'));

export const App = () => {
  const [mode, setMode] = useState('dark');
  const handleModeChange = newMode => {
    setMode(newMode);
  };
  const dispatch = useDispatch();
  const isFatching = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isFatching ? (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        width: '100%',
        marginTop: '25%',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  ) : (
    <Suspense>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/main/account"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/main/account"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/"
          element={
            <MainLayout handleModeChange={handleModeChange} mode={mode} />
          }
        >
          <Route
            path="main/account"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<Account mode={mode} />}
              />
            }
          />
          <Route
            path="main/calendar"
            element={
              <PrivateRoute redirectTo="/login" component={<Calendar />} />
            }
          />
          <Route
            path="main/statistics"
            element={
              <PrivateRoute redirectTo="/login" component={<Statistics />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
