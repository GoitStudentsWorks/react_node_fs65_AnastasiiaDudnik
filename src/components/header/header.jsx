import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Icons from 'icons/Icons';

const Header = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.down('lg'));
  console.log(matchesDesktop);
  return (
    <Container>
      <Box
        display={'flex'}
        justifyContent={{ lg: 'space-between', xs: 'right' }}
      >
        {!matchesDesktop && (
          <Typography
            fontSize={'32px'}
            fontWeight={700}
            fontFamily="Inter, sans-serif"
          >
            User Profile
          </Typography>
        )}

        <Box display={'flex'} gap={'24px'}>
          <Button
            variant="contained"
            sx={{
              borderRadius: '14px',
              background: '#3E85F3',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              textTransform: 'none',
            }}
          >
            Feedback
          </Button>

          <Box display={'flex'} gap={'14px'} alignItems={'center'}>
            <IconButton sx={{ padding: 0 }}>
              <Icons name="moon" size="32px" />
            </IconButton>
            <Typography
              fontSize={'18px'}
              fontWeight={700}
              fontFamily="Inter, sans-serif"
            >
              Nadiia
            </Typography>
            <Avatar sx={{ border: '1.8px solid #3E85F3' }} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
