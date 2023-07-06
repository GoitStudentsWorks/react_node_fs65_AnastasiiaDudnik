import { useDispatch } from 'react-redux';
import { Button, SvgIcon, Typography } from '@mui/material';
import Sprite from '../../icons/sprite.svg';
import { logout } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <Button
      sx={{
        backgroundColor: 'primary.main',
        color: 'background.paper',
        width: { xs: '131px', md: '141px' },
        gap: { xs: '6px', md: '11px' },
        py: { xs: '14px', md: '16px' },
        px: { xs: '28.5px', md: '23px' },
        borderRadius: '16px',
        boxShadow: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
        '&:hover, &:focus': {
          backgroundColor: 'primary.dark',
        },
      }}
      type="button"
      onClick={onLogout}
    >
      <Typography
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: { xs: '14px', md: '18px' },
          lineHeight: { xs: 1.286, md: 1.333 },
          letterSpacing: { xs: -0.28, md: -0.36 },
          textTransform: 'none',
        }}
      >
        Log out
      </Typography>
      <SvgIcon
        stroke="currentColor"
        sx={{
          width: { xs: '18px', md: '20px' },
          height: { xs: '18px', md: '20px' },
        }}
      >
        <use href={`${Sprite}#log-out`}></use>
      </SvgIcon>
    </Button>
  );
};
