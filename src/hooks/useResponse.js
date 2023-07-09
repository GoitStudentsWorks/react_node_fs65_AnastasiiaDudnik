import { useMediaQuery } from 'react-responsive';

export const useResponse = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439.98 });

  const isMobile = useMediaQuery({ maxWidth: 767.98 });

  const viewportHeight = window.innerHeight;

  return {
    isDesktop,
    isTablet,
    isMobile,
    viewportHeight,
  };
};
