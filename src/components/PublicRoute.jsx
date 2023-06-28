import { SideBar } from './sideBar/sideBar';

const { Outlet } = require('react-router-dom');

const PublicRoute = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};
export default PublicRoute;
