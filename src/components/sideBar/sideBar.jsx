import { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import { Logo } from '../logo/logo';
// import { UserNav } from 'atoms/UserNav';

export const SideBar = props => {
  const { window } = props;

  const drawerWidth = { mobile: 225, desktop: 289 };
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <>
      <Logo handleDrawerToggle={handleDrawerToggle} />
      {/* <UserNav handleDrawerToggle={handleDrawerToggle} /> */}
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { lg: drawerWidth.desktop },
        flexShrink: { lg: 0 },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          pt: '32px',
          pb: '24px',
          px: '24px',
        },
      }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: drawerWidth.mobile, md: drawerWidth.desktop },
            py: '24px',
            px: { xs: '20px', md: '32px' },
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth.desktop,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
