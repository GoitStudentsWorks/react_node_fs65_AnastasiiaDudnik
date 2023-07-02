import { selectReviews } from '../../redux/reviews/selectors';

import { useState, useEffect } from 'react';

import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  Avatar,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import SwipeableViews from 'react-swipeable-views-react-18-fix';

import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/reviews/operations';

const ReviewSlider = () => {
  const theme = useTheme();
  const reviews = useSelector(selectReviews);
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = reviews.length;

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prevActiveStep => (prevActiveStep + 1) % maxSteps);
    }, 2000);
    return () => clearInterval(interval);
  }, [maxSteps]);

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        mt: '64px',
        mb: { xs: '64px', md: '100px', lg: '118px' },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#3E85F3',
            fontSize: { xs: '28px', md: '40px', lg: '40px' },
            fontFamily: 'Inter',
            fontWeight: '700',
            lineHeight: { xs: '32px', md: '44px', lg: '44px' },
            textTransform: 'uppercase',
            mb: { xs: '40px', md: '50px', lg: '50px' },
          }}
        >
          Reviews
        </Typography>

        <Container
          sx={{
            // width: '275px',
            padding: { xs: '24px', md: '32px', lg: '32px' },
            paddingLeft: { xs: '20px' },
            paddingBottom: { md: '50px', lg: '50px' },
            mb: { xs: '8px', md: '18px', lg: '32px' },
            borderRadius: '8px',
            border: '1px solid rgba(17, 17, 17, 0.10)',
          }}
        >
          <SwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {reviews.map(
              ({ comment, _id, rating, owner: { avatarURL, name } }, index) => (
                <div key={_id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      sx={{
                        // height: 255,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        // maxWidth: 400,
                        overflow: 'hidden',
                        width: '100%',
                      }}
                    >
                      <Container
                        sx={{
                          display: 'flex',
                          gap: '18px',
                        }}
                      >
                        <Avatar
                          alt="avatar"
                          src={avatarURL}
                          sx={{ width: 50, height: 50 }}
                        ></Avatar>
                        <Container
                          sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                          <Typography
                            sx={{
                              color: '#343434',
                              fontSize: '18px',
                              fontWeight: { xs: '700', md: '500', lg: '500' },
                              lineHeight: '18px',
                            }}
                          >
                            {name}
                          </Typography>
                          <Typography>{rating}</Typography>
                        </Container>
                      </Container>
                      <Typography
                        sx={{
                          color: 'rgba(17, 17, 17, 0.70)',
                          fontSize: '14px',
                          fontWeight: '500',
                          lineHeight: '18px',
                        }}
                      >
                        {comment}
                      </Typography>
                    </Box>
                  ) : null}
                </div>
              )
            )}
          </SwipeableViews>
        </Container>
        <Box
          sx={{
            display: 'flex',
            gap: '25px',
            justifyContent: 'center',
          }}
        >
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewSlider;
