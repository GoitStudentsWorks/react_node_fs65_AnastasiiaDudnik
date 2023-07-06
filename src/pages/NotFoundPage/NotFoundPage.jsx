// import { UseSelector } from "react-redux";
import error from './img/error.webp';
import error2x from './img/error@2x.webp';
import error3x from './img/error@3x.webp';
import { Box, Typography } from '@mui/material';
import { useResponse } from 'hooks/useResponse';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  const { isDesktop, isTablet, isMobile } = useResponse();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textShadow:
          '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07);',
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: { xs: '100px', md: '200px', lg: '200px' },
          marginBottom: '16px',
          color: '#3E85F3',
          fontWeight: '700',
          lineHeight: { xs: '0.21', md: '0.35', lg: '0.35' },
        }}
      >
        4
        {isMobile && (
          <img
            srcSet={`${error} 1x, ${error2x} 2x, ${error3x}`}
            src={error}
            style={{ objectFit: 'contain' }}
            width="81"
            alt="404 error"
          />
        )}
        {isTablet && (
          <img
            srcSet={`${error} 1x, ${error2x} 2x, ${error3x}`}
            src={error}
            style={{ objectFit: 'contain' }}
            width="178"
            alt="404 error"
          />
        )}
        {isDesktop && (
          <img
            srcSet={`${error} 1x, ${error2x} 2x, ${error3x}`}
            src={error}
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
          color: 'rgba(17, 17, 17, 0.70)',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1.28',
          textShadow:
            '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
        }}
      >
        We’re sorry, the page you requested could not be found.
        <br />
        <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>
          {' '}
          Please go back to the homepage
        </Link>
      </Typography>
    </Box>
  );
}

export default NotFoundPage;
