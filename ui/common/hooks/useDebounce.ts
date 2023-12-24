import { useEffect, useRef } from 'react';

// Interface for the useDebounce hook props
interface IDebounceProps {
  dependencies: any[];  // List of dependencies to watch for changes
  delay?: number;       // Debounce delay in milliseconds (default: 500)
  callbackFn: () => void; // Callback function to be debounced
}

// Custom hook for debouncing function calls
export function useDebounce({ dependencies, delay = 500, callbackFn }: IDebounceProps) {
  // useRef to store the timeout ID for debouncing
  const debounce = useRef(setTimeout(() => {}, 0));

  // Effect to run when dependencies change
  useEffect(() => {
    // Clear the previous timeout to avoid unnecessary calls
    clearTimeout(debounce.current);

    // Set a new timeout for the callback function
    debounce.current = setTimeout(() => {
      callbackFn(); // Call the provided callback function after the debounce delay
    }, delay);
  }, [dependencies, delay, callbackFn]); // Watch dependencies, delay, and callbackFn for changes
}
