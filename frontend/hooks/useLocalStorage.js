import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const buttonState = window.localStorage.getItem(key);
    if (buttonState) {
      return JSON.parse(buttonState);
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const toggleButton = () => {
    setStoredValue(!storedValue);
    window.localStorage.setItem(key, !storedValue);
  };

  return [storedValue, toggleButton];
};
