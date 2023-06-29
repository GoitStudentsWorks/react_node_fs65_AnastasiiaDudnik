import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'redux/restriktedRoute';
import { MainLayout } from 'pages/MainLayout/mainLayout';
import { PrivateRoute } from 'redux/privareRoute';

const LoginPage = lazy(() => import('pages/loginPage/loginPage'));
const RegisterPage = lazy(() => import('pages/registerPage/registerPage'));
const MainPage = lazy(() => import('pages/mainPage/MainPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const Account = lazy(() => import('../pages/accountPage/accountPage'));
const Calendar = lazy(() => import('../pages/calendarPage/calendarPage'));
const Statistics = lazy(() => import('../pages/statisticsPage/statisticsPage'));

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
        <Route path="/" element={<MainLayout />}>
          <Route
            path="main/account"
            element={
              <PrivateRoute redirectTo="/login" component={<Account />} />
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
