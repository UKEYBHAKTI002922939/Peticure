import { useEffect, useState } from 'react';

// Import constants and types
import { BREAKPOINTS } from '../constants';
import { BreakpointTypes } from '../types';

// Custom hook to track the current breakpoint based on window width
const useBreakpoint = () => {
  // State to store the current breakpoint
  const [breakpoint, setBreakPoint] = useState<BreakpointTypes>();

  // Effect to run on component mount and handle window resize
  useEffect(() => {
    // Function to determine and set the current breakpoint
    const handleResize = () => {
      // Get the current window size
      const windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      // Determine the breakpoint based on window width
      if (windowSize.width > 0 && windowSize.width < 480) {
        setBreakPoint(BREAKPOINTS[0]);
      } else if (windowSize.width >= 480 && windowSize.width < 640) {
        setBreakPoint(BREAKPOINTS[480]);
      } else if (windowSize.width >= 640 && windowSize.width < 768) {
        setBreakPoint(BREAKPOINTS[640]);
      } else if (windowSize.width >= 768 && windowSize.width < 1024) {
        setBreakPoint(BREAKPOINTS[768]);
      } else if (windowSize.width >= 1024 && windowSize.width < 1280) {
        setBreakPoint(BREAKPOINTS[1024]);
      } else if (windowSize.width >= 1280 && windowSize.width < 1536) {
        setBreakPoint(BREAKPOINTS[1280]);
      } else {
        setBreakPoint(BREAKPOINTS[1536]);
      }
    };

    // Attach the event listener and call handleResize to set initial breakpoint
    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup: Remove the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount

  // Return the current breakpoint
  return breakpoint;
};

export default useBreakpoint;
