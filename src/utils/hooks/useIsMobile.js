import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileWidthThreshold = 768; // Adjust as needed based on your design
      const currentWindowWidth = window.innerWidth;
      setIsMobile(currentWindowWidth < mobileWidthThreshold);
    };

    checkIsMobile();

    const handleResize = () => {
      checkIsMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
