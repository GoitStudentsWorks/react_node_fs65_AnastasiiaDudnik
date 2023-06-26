const { default: Header } = require('components/header/header');
const { Outlet } = require('react-router-dom');

export const MainTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
