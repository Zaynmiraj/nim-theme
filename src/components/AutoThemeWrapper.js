// src/components/AutoThemeWrapper.js
import React, { useEffect, useState } from "react";
import { detectPlatform } from "../utils/detectPlatform";
import { ThemeProvider } from "../theme-context"; // Import custom ThemeProvider

const AutoThemeWrapper = ({ children, customTheme }) => {
  const platform = detectPlatform();
  const [isWrapped, setIsWrapped] = useState(false);

  useEffect(() => {
    setIsWrapped(true);
  }, [platform]);

  if (isWrapped) {
    return <ThemeProvider customTheme={customTheme}>{children}</ThemeProvider>;
  }

  return null; // Do nothing until the platform is detected and wrapping is done
};

export default AutoThemeWrapper;
