import { Box, Container, Typography } from '@mui/material';
import { useResponse } from 'hooks/useResponse';

//desktop_images
import d_calendar from './lg/calendar1x.png';
import d_calendar2 from './lg/calendar2xlg.png';
import d_sidebar from './lg/sidebar1xpg.png';
import d_sidebar2 from './lg/sidebar2xlg.png';
import d_all from './lg/one1x.png';
import d_all2 from './lg/one2xlg.png';

//tablet_images
import t_calendar from './md/calendar1x.png';
import t_calendar2 from './md/calendar2x.png';
import t_sidebar from './md/sidebar1x.png';
import t_sidebar2 from './md/sidebar2x.png';
import t_all from './md/one1x.png';
import t_all2 from './md/one2x.png';

//mobile_images
import m_calendar from './sm/calendar.png';
import m_calendar2 from './sm/calendar1x.png';
import m_sidebar from './sm/image (5).png';
import m_sidebar2 from './sm/sidebar2x.png';
import m_all from './sm/one1.png';
import m_all2 from './sm/one2.png';

const Description = () => {
  const { isDesktop, isTablet, isMobile } = useResponse();
  return (
    <Box sx={{ mt: '64px' }}>
      <Container
        sx={{
          display: { xs: 'block', md: 'block', lg: 'flex' },
          gap: '228px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            width: '275px',
            ml: { xs: 'auto', md: '0', lg: '0' },
            mr: { xs: 'auto', md: '0', lg: '0' },
            padding: { xs: 0 },
          }}
        >
          <Typography
            sx={{
              color: '#3E85F3',
              fontSize: '80px',
              fontWeight: 700,
              lineHeight: '100%',
              letterSpacing: '-4px',
              mb: '14px',
            }}
          >
            1.
          </Typography>
          <Typography
            sx={{
              color: '#3E85F3',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '40px',
              textTransform: 'uppercase',
              backgroundColor: '#DCEBF7',
              width: '214px',
              borderRadius: '44px',
              textAlign: 'center',
              mb: '8px',
            }}
          >
            Calendar
          </Typography>
          <Typography
            sx={{
              color: '#171820',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '40px',
              textTransform: 'uppercase',
              mb: '14px',
            }}
          >
            View
          </Typography>
          <Typography
            sx={{
              color: '#171820',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '18px',
              mb: '40px',
            }}
          >
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </Typography>
        </Container>
        {isMobile && (
          <img
            srcSet={`${m_calendar} 1x, ${m_calendar2} 2x`}
            src={m_calendar}
            alt="calendar views"
            width="335"
            height="457"
            style={{ display: 'flex', marginRight: 'auto', marginLeft: 'auto' }}
          />
        )}
        {isTablet && (
          <img
            srcSet={`${t_calendar} 1x, ${t_calendar2} 2x`}
            src={t_calendar}
            alt="calendar views"
            width="704"
            height="700"
          />
        )}
        {isDesktop && (
          <img
            srcSet={`${d_calendar} 1x, ${d_calendar2} 2x`}
            src={d_calendar}
            alt="calendar views"
            width="604"
            height="700"
          />
        )}
      </Container>
      <Container
        sx={{
          mt: '64px',
          display: { xs: 'block', md: 'block', lg: 'flex' },
          gap: '228px',
          justifyContent: 'center',
          flexDirection: { lg: 'row-reverse' },
          alignItems: 'center',
          ml: { xs: 'auto', md: 'auto', lg: '0' },
          mr: { xs: 'auto', md: '0', lg: '0' },
        }}
      >
        <Container
          sx={{
            width: '275px',
            ml: { xs: 'auto', md: 'auto', lg: '0' },
            mr: { xs: 'auto', md: '0', lg: '0' },
            padding: { xs: 0 },
          }}
        >
          <Typography
            sx={{
              color: '#3E85F3',
              fontSize: '80px',
              fontWeight: 700,
              lineHeight: '100%',
              letterSpacing: '-4px',
              mb: '14px',
            }}
          >
            2.
          </Typography>
          <Typography
            sx={{
              color: '#171820',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '40px',
              textTransform: 'uppercase',
              mb: '14px',
            }}
          >
            SIDEBAR
          </Typography>
          <Typography
            sx={{
              color: '#171820',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '18px',
              mb: '40px',
            }}
          >
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </Typography>
        </Container>
        {isMobile && (
          <img
            srcSet={`${m_sidebar} 1x, ${m_sidebar2} 2x`}
            src={m_sidebar}
            alt="sidebar views"
            width="335"
            height="457"
            style={{ display: 'flex', marginRight: 'auto', marginLeft: 'auto' }}
          />
        )}
        {isTablet && (
          <img
            srcSet={`${t_sidebar} 1x, ${t_sidebar2} 2x`}
            src={t_sidebar}
            alt="sidebar views"
            width="704"
            height="700"
            style={{ display: 'flex', marginLeft: 'auto' }}
          />
        )}
        {isDesktop && (
          <img
            srcSet={`${d_sidebar} 1x, ${d_sidebar2} 2x`}
            src={d_sidebar}
            alt="sidebar views"
            width="604"
            height="700"
          />
        )}
      </Container>
      <Container
        sx={{
          mt: '64px',
          display: { xs: 'block', md: 'block', lg: 'flex' },
          gap: '228px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            width: '275px',
            ml: { xs: 'auto', md: '0', lg: '0' },
            mr: { xs: 'auto', md: '0', lg: '0' },
            padding: { xs: 0 },
          }}
        >
          <Typography
            sx={{
              color: '#3E85F3',
              fontSize: '80px',
              fontWeight: 700,
              lineHeight: '100%',
              letterSpacing: '-4px',
              mb: '14px',
            }}
          >
            3.
          </Typography>
          <Typography
            sx={{
              color: '#3E85F3',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '40px',
              textTransform: 'uppercase',
              backgroundColor: '#DCEBF7',
              width: '139px',
              borderRadius: '44px',
              textAlign: 'center',
              mb: '8px',
            }}
          >
            ALL IN
          </Typography>
          <Typography
            sx={{
              color: '#171820',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '40px',
              textTransform: 'uppercase',
              mb: '14px',
            }}
          >
            ONE
          </Typography>
          <Typography
            sx={{
              color: '#171820',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '18px',
              mb: '40px',
            }}
          >
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </Typography>
        </Container>
        {isMobile && (
          <img
            srcSet={`${m_all} 1x, ${m_all2} 2x`}
            src={m_all}
            alt="all calendar view"
            width="335"
            height="457"
            style={{ display: 'flex', marginRight: 'auto', marginLeft: 'auto' }}
          />
        )}
        {isTablet && (
          <img
            srcSet={`${t_all} 1x, ${t_all2} 2x`}
            src={t_all}
            alt="all calendar view"
            width="704"
            height="700"
          />
        )}
        {isDesktop && (
          <img
            srcSet={`${d_all} 1x, ${d_all2} 2x`}
            src={d_all}
            alt="all calendar view"
            width="604"
            height="700"
          />
        )}
      </Container>
    </Box>
  );
};
export default Description;
