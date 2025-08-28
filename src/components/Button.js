// src/components/Button.js
import React from "react";
import { useTheme } from "../theme-context";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ text }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (theme) => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.padding,
      margin: theme.spacing.margin,
    },
    text: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily,
    },
  });
};

export default Button;
