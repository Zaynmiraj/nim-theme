// src/utils/createTheme.js
export const createTheme = ({ colors, typography, spacing }) => {
  return {
    colors: {
      primary: colors.primary || "#0070f3",
      background: colors.background || "#ffffff",
      text: colors.text || "#000000",
    },
    typography: {
      fontFamily: typography.fontFamily || "Arial, sans-serif",
      fontSize: typography.fontSize || "16px",
      lineHeight: typography.lineHeight || "1.5",
      h1: typography.h1 || { fontSize: "32px", fontWeight: "bold" },
      h2: typography.h2 || { fontSize: "28px", fontWeight: "bold" },
    },
    spacing: {
      padding: spacing.padding || "16px",
      margin: spacing.margin || "8px",
    },
  };
};
