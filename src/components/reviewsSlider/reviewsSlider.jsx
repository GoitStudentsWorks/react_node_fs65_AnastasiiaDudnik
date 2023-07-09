import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sprite from 'icons/sprite.svg';

import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  SvgIcon,
} from '@mui/material';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getReviews } from '../../redux/reviews/operations';
import { selectReviews } from '../../redux/reviews/selectors';

const StarRating = ({ rating }) => {
  const maxRating = 5;

  const stars = [];

  for (let i = 1; i <= maxRating; i += 1) {
    if (i <= rating) {
      stars.push(
        <SvgIcon
          key={i}
          style={{
            width: '14px',
            height: '14px',
            fill: 'rgba(255, 172, 51, 1)',
          }}
        >
          <use href={`${Sprite}#starYellow`} />
        </SvgIcon>
      );
    } else {
      stars.push(
        <SvgIcon
          key={i}
          style={{
            width: '14px',
            height: '14px',
          }}
        >
          <use href={`${Sprite}#starGrey`} />
        </SvgIcon>
      );
    }
  }

  return <Box sx={{ display: 'flex', gap: '10px' }}>{stars}</Box>;
};

const ReviewSlider = () => {
  const reviews = useSelector(selectReviews);
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const sliderRef = useRef(null);

  const maxSteps = reviews.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
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
          autoplaySpeed: 4000,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prevActiveStep => (prevActiveStep + 1) % maxSteps);
    }, 2000);
    return () => clearInterval(interval);
  }, [maxSteps]);

  const sliderStyle = `
  .slick-list { margin: 0 -7px; & .slick-slide > div { padding: 0 10px; } }
  
`;

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
            fontFamily: 'Inter, sans-serif',
            fontWeight: '700',
            lineHeight: { xs: '32px', md: '44px', lg: '44px' },
            textTransform: 'uppercase',
            mb: { xs: '40px', md: '50px', lg: '50px' },
          }}
        >
          Reviews
        </Typography>
        <style>{sliderStyle}</style>
        <div
          style={{
            width: '100%',
          }}
        >
          <Slider ref={sliderRef} {...settings}>
            {reviews.map(
              ({ comment, _id, rating, owner: { avatarURL, name } }) => (
                <Container
                  key={_id}
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
                        mb: '24px',
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
                        <StarRating rating={rating} />
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
                </Container>
              )
            )}
          </Slider>
        </div>
        <Box
          sx={{
            display: 'flex',
            gap: '25px',
            justifyContent: 'center',
          }}
        >
          <Button onClick={handlePrevClick} disabled={activeStep === 0}>
            <SvgIcon
              style={{
                cursor: 'pointer',
                width: '61px',
                height: '61px',
                fill: 'rgba(17, 17, 17, 1)',
              }}
            >
              <use href={`${Sprite}#arrow-left`} />
            </SvgIcon>
          </Button>
          <Button onClick={handleNextClick} disabled={activeStep === 0}>
            <SvgIcon
              style={{
                cursor: 'pointer',
                width: '61px',
                height: '61px',
                fill: 'rgba(17, 17, 17, 1)',
              }}
            >
              <use href={`${Sprite}#arrow-right`} />
            </SvgIcon>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewSlider;
