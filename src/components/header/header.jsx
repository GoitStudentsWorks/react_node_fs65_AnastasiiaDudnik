import { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Typography,
  Toolbar,
  SvgIcon,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Sprite from '../../icons/sprite.svg';
import { FeedbackForm } from 'components/feedbackForm/feedbackForm';
import { useDispatch, useSelector } from 'react-redux';
import { getUserReview } from '../../redux/reviews/operations';
import { selectUser } from '../../redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import hay from './hay.png';

export const Header = ({
  handleDrawerToggle,
  drawerWidth,
  handleModeChange,
  mode,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userState = useSelector(selectUser);
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.down('lg'));
  const { id } = useSelector(selectUser);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);

  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    handleModeChange(newMode);
  };

  const handleModalToggle = () => {
    setFeedbackModalOpen(!feedbackModalOpen);
  };

  const spanDay = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            lineHeight: '18px',
            color: '#3E85F3',
          }}
        >
          Let go
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            lineHeight: '18px',
            color: mode === 'light' ? '#fff' : '#111',
          }}
        >
          of the past and focus on the present!
        </Typography>
      </Box>
    );
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          lg: `calc(100% - ${drawerWidth.desktop}px)`,
        },
        ml: {
          lg: `${drawerWidth.desktop}px`,
        },
        bgcolor: mode !== 'dark' ? ' #171820' : 'background.default',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: '20px', md: '32px' },
          minHeight: { xs: '0px' },
          pt: '24px',
          pb: '24px',
        }}
      >
        {!matchesDesktop ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
              alignItems: 'center',
            }}
          >
            {location.pathname.startsWith('/main/calendar/day/') && (
              <img src={hay} width={64} alt="goose" />
            )}
            <Box>
              <Typography
                fontSize={'32px'}
                fontWeight={700}
                fontFamily="Inter, sans-serif"
                lineHeight={1}
                sx={{
                  color: mode !== 'dark' ? ' #fff' : 'text.primary',

                  textShadow:
                    '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
                }}
              >
                {(location.pathname === '/main/account' && 'User Profile') ||
                  (location.pathname.startsWith('/main/calendar/') &&
                    'Calendar') ||
                  (location.pathname.startsWith('/main/statistics') &&
                    'Statistics')}
              </Typography>
              {location.pathname.startsWith('/main/calendar/day/') && spanDay()}
            </Box>
          </Box>
        ) : (
          <IconButton
            color="text.secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              m: 0,
              p: 0,
              display: { lg: 'none' },
              color: mode !== 'dark' ? '#FFFFFF' : '#343434',
              '&:hover': {
                backgroundColor:
                  mode !== 'dark' ? '#171820' : 'background.default',
                color: '#3E85F3',
              },
            }}
          >
            <SvgIcon
              sx={{
                width: { xs: '24px', md: '34px' },
                height: { xs: '24px', md: '34px' },
              }}
              stroke="currentColor"
            >
              <use href={`${Sprite}#menu`}></use>
            </SvgIcon>
          </IconButton>
        )}

        <Box display={'flex'} gap={{ xs: '18px', md: '24px' }}>
          <Button
            variant="contained"
            onClick={() => {
              setFeedbackModalOpen(!feedbackModalOpen);
              dispatch(getUserReview(id));
            }}
            sx={{
              borderRadius: { xs: '10px', md: '14px' },
              background: '#3E85F3',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: { xs: '12px', md: '14px' },
              lineHeight: { xs: 1.333, md: 1.286 },
              py: { xs: '8px', md: '12px' },
              px: { xs: '20px', md: '32px' },
            }}
          >
            Feedback
          </Button>

          <FeedbackForm
            feedbackModalOpen={feedbackModalOpen}
            handleModalToggle={handleModalToggle}
          />

          <Box
            display={'flex'}
            gap={{ xs: '8px', md: '14px' }}
            alignItems={'center'}
          >
            <IconButton
              sx={{ padding: 0 }}
              onClick={toggleColorMode}
              color="inherit"
            >
              {mode !== 'dark' ? (
                <SvgIcon
                  sx={{
                    width: { xs: '24px', md: '32px' },
                    height: { xs: '24px', md: '32px' },
                  }}
                  stroke="currentColor"
                >
                  <use href={`${Sprite}#sun`}></use>
                </SvgIcon>
              ) : (
                <SvgIcon
                  sx={{
                    width: { xs: '24px', md: '32px' },
                    height: { xs: '24px', md: '32px' },
                  }}
                  stroke="currentColor"
                >
                  <use href={`${Sprite}#moon`}></use>
                </SvgIcon>
              )}
            </IconButton>
            <Typography
              fontSize={{ xs: '14px', md: '18px' }}
              fontWeight={700}
              fontFamily="Inter, sans-serif"
              color={mode !== 'dark' ? ' #fff' : 'text.secondary'}
              lineHeight={{ xs: 1.286, md: 1 }}
            >
              {userState.name}
            </Typography>
            <Avatar
              src={userState.avatarURL || ''}
              sx={{
                border: '1.8px solid #3E85F3',
                width: { xs: '32px', md: '44px' },
                height: { xs: '32px', md: '44px' },
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
