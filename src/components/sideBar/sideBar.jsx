import { Box, Drawer } from '@mui/material';
import { Logo } from '../logo/logo';
import { UserNav } from '../userNav/userNav';
import { LogoutBtn } from 'components/logoutBtn/logoutBtn';

const SideBar = ({ drawerWidth, mobileOpen, handleDrawerToggle, mode }) => {
  const drawer = (
    <>
      <Box>
        <Logo handleDrawerToggle={handleDrawerToggle} mode={mode} />
        <UserNav handleDrawerToggle={handleDrawerToggle} mode={mode} />
      </Box>
      <LogoutBtn />
    </>
  );

  return (
    <Box component="nav" sx={{ flexShrink: { lg: 0 } }}>
      <Drawer
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
            bgcolor: mode !== 'dark' ? ' #13151A' : '#F7F6F9',
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
            bgcolor: mode !== 'dark' ? ' #13151A' : '#F7F6F9',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
export default SideBar;
