import { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import { Logo } from '../logo/logo';
import { UserNav } from '../userNav/userNav';
import { LogoutBtn } from 'components/logoutBtn/logoutBtn';

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
      <Box>
        <Logo handleDrawerToggle={handleDrawerToggle} />
        <UserNav handleDrawerToggle={handleDrawerToggle} />
      </Box>
      <LogoutBtn />
    </>
  );

  return (
    <Box component="nav" sx={{ flexShrink: { lg: 0 } }}>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'flex', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            justifyContent: 'space-between',
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
          display: { xs: 'none', lg: 'flex' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth.desktop,
            justifyContent: 'space-between',
            pt: '32px',
            pb: '24px',
            px: '24px',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
