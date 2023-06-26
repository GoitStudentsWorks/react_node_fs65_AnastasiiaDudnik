import { Typography, Box } from '@mui/material';
import goose from './GOOSE.png';
import { Link } from 'react-router-dom';

const AuthSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#3E85F3',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        src={goose}
        alt="ghose"
        width={150}
        height={150}
        style={{ marginTop: 232 }}
      />
      <Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: 'Coolvetica, sans-serif',
            fontStyle: 'normal',
            fontSize: { xs: 44, md: 120, lg: 120 },
            lineHeight: { xs: 1.375, md: 1.333, lg: 1 },
            color: '#fff',
            textTransform: 'none',
            textShadow:
              '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
          }}
        >
          G
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: 'Coolvetica, sans-serif',
            fontStyle: 'italic',
            fontSize: { xs: 44, md: 120, lg: 120 },

            lineHeight: { xs: 1.375, md: 1.333, lg: 1 },
            color: '#fff',
            textTransform: 'none',
            textShadow:
              '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
          }}
        >
          oo
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: 'Coolvetica, sans-serif',
            fontStyle: 'normal',
            fontSize: { xs: 44, md: 120, lg: 120 },

            lineHeight: { xs: 1.375, md: 1.333, lg: 1 },
            color: '#fff',
            textTransform: 'none',
            textShadow:
              '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
          }}
        >
          seTrack
        </Typography>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row', lg: 'row' },
          alignItems: 'center',
          justifyContent: { md: 'center', lg: 'center' },
          gap: { xs: '208px', md: '24px', lg: '24px' },
          mb: { xs: '88px', md: '320px', lg: '200px' },
          mt: { xs: '32px', md: '40px' },
        }}
      >
        <Link to={'/register'} style={{ color: '#fff' }}>
          <Typography sx={{ color: '#fff' }}>Sign up</Typography>
        </Link>
        <Link
          to={'/login'}
          style={{
            textDecoration: 'none',
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              width: 131,
              paddingTop: '14px',
              paddingBottom: '14px',
              backgroundColor: '#fff',
              borderRadius: '16px',
              textAlign: 'center',
              color: '#3E85F3',
              textDecoration: 'none',
              fontSize: 14,
            }}
          >
            Log in
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
export default AuthSection;
