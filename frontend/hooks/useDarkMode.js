import { useState } from "react";

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useState(initialValue);
  return [darkMode, setDarkMode];
};
