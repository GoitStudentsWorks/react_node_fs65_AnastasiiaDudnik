import { Outlet } from 'react-router-dom';
import { useRef, useState, useLayoutEffect, Suspense } from 'react';
import { Box } from '@mui/material';
import { Header } from '../../components/header/header';
import SideBar from 'components/sideBar/sideBar';

export const MainLayout = () => {
  const drawerWidth = { mobile: 225, desktop: 289 };
  const [mobileOpen, setMobileOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [mode, setMode] = useState('light');
  const elRef = useRef();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleModeChange = newMode => {
    setMode(newMode);
  };

  useLayoutEffect(() => {
    setHeight(elRef.current.children[0].clientHeight);
  }, []);

  return (
    <Box sx={{ display: 'flex' }} ref={elRef}>
      <Header
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        handleModeChange={handleModeChange}
      />
      <SideBar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: {
            lg: `calc(100% - ${drawerWidth.desktop}px)`,
          },
          // height: {
          //   xs: `calc(${viewHeight}px - ${height}px - 64px - 40px) `,
          //   md: `calc(${viewHeight}px - ${height}px - 64px - 38px) `,
          //   lg: `calc(${viewHeight}px - ${height}px - 33px - 32px) `,
          // },
          bgcolor: 'background.default',
          ml: { lg: `${drawerWidth.desktop}px` },
          px: { xs: '20px', md: '32px' },
          pb: { xs: '40px', md: '38px', lg: '32px' },
          pt: {
            xs: `64px`,
            lg: `33px`,
          },
          mt: { xs: `${height}px` },
        }}
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};
