import AuthSection from 'components/authSection/authSection';
import Description from 'components/description/description';
import ReviewSlider from 'components/reviewsSlider/reviewsSlider';
import React from 'react';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewSlider />
    </>
  );
};
export default MainPage;
