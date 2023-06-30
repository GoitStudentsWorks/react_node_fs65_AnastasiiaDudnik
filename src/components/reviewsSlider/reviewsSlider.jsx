import { useState } from 'react';

import { Box, Typography, Button, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// import { useDispatch } from 'react-redux';
import { getReviews } from '../../redux/reviews/operations';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ReviewSlider = () => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  // const maxSteps = reviews.length;

  const rewiews = getReviews();

  //   useEffect(() => {
  //     dispatch(rewiews);
  //   }, [dispatch, rewiews]);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: '64px',
      }}
    >
      <Typography
        sx={{
          color: '#3E85F3',
          fontSize: '28px',
          fontFamily: 'Inter',
          fontWeight: '700',
          lineHeight: '32px',
          textTransform: 'uppercase',
          mb: '40px',
        }}
      >
        Reviews
        {/* {images[activeStep].label} */}
      </Typography>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {rewiews.map((step, index) => (
            <div key={step._id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Button
          size="small"
          onClick={handleNext}
          // disabled={activeStep === maxSteps - 1}
        >
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
        backButton=
        {
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      </Box>
    </Box>
  );
};

export default ReviewSlider;
