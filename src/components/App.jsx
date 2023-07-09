import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'redux/restriktedRoute';
import { MainLayout } from 'pages/MainLayout/mainLayout';
import { PrivateRoute } from 'redux/privareRoute';
import {
  // ColorRing,
  MutatingDots,
} from 'react-loader-spinner';

const LoginPage = lazy(() => import('pages/loginPage/loginPage'));
const RegisterPage = lazy(() => import('pages/registerPage/registerPage'));
const MainPage = lazy(() => import('pages/mainPage/MainPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const Account = lazy(() => import('../pages/accountPage/accountPage'));
const CalendarPage = lazy(() => import('../pages/calendarPage/calendarPage'));
// const Statistics = lazy(() => import('../pages/statisticsPage/statisticsPage'));
const ChoosedDay = lazy(() => import('./choosedDay/choosedDay'));
const Calendar = lazy(() => import('./calendar/calendar'));

export const App = () => {
  const [mode, setMode] = useState('dark');
  const [date, setDate] = useState('')
  const readDate = (newDate)=>[
    setDate(newDate)
  ]
  const handleModeChange = newMode => {
    setMode(newMode);
  };
  const dispatch = useDispatch();
  const isFatching = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isFatching ? (
    <MutatingDots
      height="100"
      width="100"
      color="#3E85F3"
      secondaryColor="#2d60ac"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
      }}
      wrapperClass=""
      visible={true}
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
              <PrivateRoute
                redirectTo="/login"
                component={<CalendarPage mode={mode} readDate={readDate}/>}
              />
            }
          >
            <Route
              index
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<Calendar mode={mode} />}
                />
              }
            />
            <Route
              path="month/:day"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<Calendar mode={mode} />}
                />
              }
            />
            <Route
              path="day/:day"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ChoosedDay mode={mode} date={date}/>}
                />
              }
            />
          </Route>
          {/* <Route
            path="main/statistics"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<Statistics mode={mode} />}
              />
            }
          /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
