import { useState, useEffect } from 'react';
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const updateWindowDimensions = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
    setIsSmallScreen(newWindowWidth < 1024);
    setIsLargeScreen(newWindowWidth >= 1024);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);
  return { windowWidth, isSmallScreen, isLargeScreen };
};

export default useWindowWidth;


