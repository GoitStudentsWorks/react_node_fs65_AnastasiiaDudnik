import { SideBar } from 'components/sideBar/sideBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
