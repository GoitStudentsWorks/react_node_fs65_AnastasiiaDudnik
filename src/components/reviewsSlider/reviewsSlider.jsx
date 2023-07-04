import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sprite from 'icons/sprite.svg';

import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  Avatar,
  SvgIcon,
} from '@mui/material';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getReviews } from '../../redux/reviews/operations';
import { selectReviews } from '../../redux/reviews/selectors';

const ReviewSlider = () => {
  const theme = useTheme();
  const reviews = useSelector(selectReviews);
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = reviews.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

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
    }, 4000);
    return () => clearInterval(interval);
  }, [maxSteps]);

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
            height: { xs: '194px', md: '187px', lg: '187px' },
            width: { xs: '335px', md: '580px', lg: '580px' },
            padding: { xs: '24px', md: '32px', lg: '32px' },
            paddingLeft: { xs: '20px' },
            paddingBottom: { md: '50px', lg: '50px' },
            mb: { xs: '8px', md: '18px', lg: '32px' },
            borderRadius: '8px',
            border: '1px solid rgba(17, 17, 17, 0.10)',
          }}
        >
          <Slider {...settings}>
            {reviews.map(
              ({ comment, _id, rating, owner: { avatarURL, name } }) => (
                <div key={_id}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '24px',
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
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '13px',
                        }}
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
                </div>
              )
            )}
          </Slider>
        </Container>
        <Box
          sx={{
            display: 'flex',
            gap: '25px',
            justifyContent: 'center',
          }}
        >
          <Button onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <SvgIcon
                style={{ cursor: 'pointer', width: '61px', height: '61px' }}
              >
                <use href={`${Sprite}#arrow-right`} />
              </SvgIcon>
            ) : (
              <SvgIcon
                style={{ cursor: 'pointer', width: '61px', height: '61px' }}
              >
                <use href={`${Sprite}#arrow-left`} />
              </SvgIcon>
            )}
          </Button>
          <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? (
              <SvgIcon
                style={{ cursor: 'pointer', width: '61px', height: '61px' }}
              >
                <use href={`${Sprite}#arrow-left`} />
              </SvgIcon>
            ) : (
              <SvgIcon
                style={{ cursor: 'pointer', width: '61px', height: '61px' }}
              >
                <use href={`${Sprite}#arrow-right`} />
              </SvgIcon>
            )}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewSlider;
