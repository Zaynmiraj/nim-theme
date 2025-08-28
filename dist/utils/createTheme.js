"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTheme = void 0;
// src/utils/createTheme.js
var createTheme = exports.createTheme = function createTheme(_ref) {
  var colors = _ref.colors,
    typography = _ref.typography,
    spacing = _ref.spacing;
  return {
    colors: {
      primary: colors.primary || "#0070f3",
      background: colors.background || "#ffffff",
      text: colors.text || "#000000"
    },
    typography: {
      fontFamily: typography.fontFamily || "Arial, sans-serif",
      fontSize: typography.fontSize || "16px",
      lineHeight: typography.lineHeight || "1.5",
      h1: typography.h1 || {
        fontSize: "32px",
        fontWeight: "bold"
      },
      h2: typography.h2 || {
        fontSize: "28px",
        fontWeight: "bold"
      }
    },
    spacing: {
      padding: spacing.padding || "16px",
      margin: spacing.margin || "8px"
    }
  };
};