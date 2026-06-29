import { useState, useEffect, useRef } from "react";

type UseDebounceParams<T> = {
  value: T;
  delay: number;
  onDebounce?: (value: T) => void;
};

const useDebounce = <T>({ value, delay, onDebounce }: UseDebounceParams<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const onDebounceRef = useRef(onDebounce);
  const isInitialMount = useRef(true);

  useEffect(() => {
    onDebounceRef.current = onDebounce;
  }, [onDebounce]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value);
      onDebounceRef.current?.(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue };
};

export default useDebounce;
