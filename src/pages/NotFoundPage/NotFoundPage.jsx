// import { UseSelector } from "react-redux";
import error from './img/error.webp';
import error2x from './img/error@2x.webp';
import error3x from './img/error@3x.webp';
import { Box, Button, Typography } from '@mui/material';
import { useResponse } from 'hooks/useResponse';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NotFoundPage({ mode }) {
  const { isDesktop, isTablet, isMobile } = useResponse();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        px: { xs: '47px', md: '132px' },
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: { xs: '100px', md: '200px' },
          marginBottom: { xs: '28px' },
          color: '#3E85F3',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '700',
          lineHeight: { xs: '0.21', md: '0.35' },
          textShadow:
            '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
        }}
      >
        4
        {isMobile && (
          <img
            srcSet={`${error} 1x, ${error} 2x, ${error}`}
            src={error}
            style={{ objectFit: 'contain' }}
            width="81"
            alt="404 error"
          />
        )}
        {isTablet && (
          <img
            srcSet={`${error2x} 1x, ${error2x} 2x, ${error2x}`}
            src={error2x}
            style={{ objectFit: 'contain' }}
            width="178"
            alt="404 error"
          />
        )}
        {isDesktop && (
          <img
            srcSet={`${error3x} 1x, ${error3x} 2x, ${error3x}`}
            src={error3x}
            style={{ objectFit: 'contain' }}
            width="178"
            alt="404 error"
          />
        )}
        4
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          maxWidth: { xs: '281px', md: '387px' },
          color:
            mode !== 'dark'
              ? 'rgba(255, 255, 255, 0.70)'
              : 'rgba(17, 17, 17, 0.70)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: 1.286,
          textShadow:
            '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
        }}
      >
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
        {/* <br /> */}
      </Typography>
      <Button
        sx={{
          backgroundColor: '#3E85F3',
          color: '#FFFFFF',
          py: { xs: '14px', md: '16px' },
          px: { xs: '32px', md: '48px' },
          borderRadius: '16px',
          boxShadow: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
          mt: { xs: '24px', md: '32px' },
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: { xs: '14px', md: '18px' },
          lineHeight: { xs: 1.286, md: 1.333 },
          textTransform: 'none',
          '&:hover, &:focus': {
            backgroundColor: 'primary.dark',
          },
        }}
        onClick={() => navigate('/')}
      >
        Back to home
      </Button>
      {/* <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>
        {' '}
        Please go back to the homepage
      </Link> */}
    </Box>
  );
}

export default NotFoundPage;
