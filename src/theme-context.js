// src/theme-context.js
import React, { createContext, useState, useContext } from "react";
import { defaultTheme } from "./themes/default"; // Default theme

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children, customTheme }) => {
  const [theme, setTheme] = useState(customTheme || defaultTheme);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
