import { useMediaQuery } from 'react-responsive';

// export const useResponsive = (maxWidth, minWidth) => {
export const useResponsive = () => {
  const isBigScreen = useMediaQuery({
    minWidth: 1400,
  });

  const isDesktop = useMediaQuery({
    minWidth: 1200,
    maxWidth: 4000,
  });

  const isSmallDesktop = useMediaQuery({
    minWidth: 768,
    maxWidth: 1200,
  });

  const isTablet = useMediaQuery({
    minWidth: 601,
    maxWidth: 768,
  });

  const isPhone = useMediaQuery({
    maxWidth: 601,
  });

  return {
    isBigScreen,
    isTablet,
    isPhone,
    isDesktop,
    isSmallDesktop,
  };
};
