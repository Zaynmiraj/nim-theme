# nim-theme

`nim-theme` is a powerful and flexible theming library designed for ReactJS, NextJS, and React Native applications. It allows you to create custom themes, including typography, colors, spacing, and more, and automatically apply them to your application. This library also detects the environment (ReactJS, NextJS, or React Native) and wraps your app with the necessary `ThemeProvider` to ensure consistency across different platforms.

---

## Features

- **Custom Theme Creation**: Define your custom themes with colors, typography, spacing, and other design tokens.
- **Automatic Theme Application**: The library auto-detects whether you're using ReactJS, NextJS, or React Native and applies the correct theme context.
- **Flexible Theme Management**: Dynamically switch between predefined or custom themes within your application.
- **Cross-platform Support**: Works seamlessly across ReactJS, NextJS, and React Native.
- **Simple API**: Easy-to-use API for integrating theme management into your project.

---

## Installation

To install `nim-theme`, run the following command:

```bash
npm install nim-theme
```

### Usage

## 1. Setting Up the Theme Provider

To use nim-theme, wrap your main app component with the AutoThemeWrapper. It will auto-detect the platform (ReactJS, React Native, NextJS) and apply the correct theme context.

Example for ReactJS / NextJS

In ReactJS or NextJS, you can import and use the AutoThemeWrapper in your index.js (ReactJS) or \_app.js (NextJS).

```
// src/index.js (ReactJS)
import React from 'react';
import ReactDOM from 'react-dom';
import { AutoThemeWrapper } from 'nim-theme';  // Import AutoThemeWrapper
import { createTheme } from 'nim-theme/utils/createTheme';  // Import utility to create custom themes
import App from './App';

// Create a custom theme
const customTheme = createTheme({
  colors: {
    primary: '#FF6347',
    background: '#f0f0f0',
    text: '#333333',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    lineHeight: '1.5',
  },
  spacing: {
    padding: '12px',
    margin: '8px',
  },
});

ReactDOM.render(
  <AutoThemeWrapper customTheme={customTheme}>
    <App />
  </AutoThemeWrapper>,
  document.getElementById('root')
);
```

## Example for React Native

In React Native, simply wrap your App component with the AutoThemeWrapper:

```
// App.js (React Native)
import React from 'react';
import { AutoThemeWrapper } from 'nim-theme';  // Import AutoThemeWrapper
import { createTheme } from 'nim-theme/utils/createTheme';  // Import utility to create custom themes
import Button from 'nim-theme/components/Button';  // Example Button component

// Create a custom theme
const customTheme = createTheme({
  colors: {
    primary: '#FF6347',
    background: '#f0f0f0',
    text: '#333333',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    lineHeight: '1.5',
  },
  spacing: {
    padding: '12px',
    margin: '8px',
  },
});

export default function App() {
  return (
    <AutoThemeWrapper customTheme={customTheme}>
      <Button text="Click Me" />
    </AutoThemeWrapper>
  );
}
```

### 2. Custom Theme Creation

You can create a custom theme by using the createTheme function. This function accepts an object with properties such as colors, typography, and spacing.

# Example:

```
import { createTheme } from 'nim-theme/utils/createTheme';

// Create a custom theme
const customTheme = createTheme({
  colors: {
    primary: '#FF6347',  // Custom Primary Color
    background: '#f0f0f0',  // Custom Background Color
    text: '#333333',  // Custom Text Color
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',  // Custom Font Family
    fontSize: '14px',  // Custom Font Size
    lineHeight: '1.5',  // Custom Line Height
    h1: { fontSize: '32px', fontWeight: 'bold' },  // Custom H1
    h2: { fontSize: '28px', fontWeight: 'bold' },  // Custom H2
  },
  spacing: {
    padding: '12px',
    margin: '8px',
  },
});
```

### 3. Using the Theme

Once the AutoThemeWrapper is wrapped around your app, you can access the theme using the useTheme hook.

# Example:

```
import React from 'react';
import { useTheme } from 'nim-theme';  // Import the useTheme hook

const Button = () => {
  const { theme } = useTheme();  // Get the current theme

  return (
    <button style={{ backgroundColor: theme.colors.primary, color: theme.colors.text }}>
      Click Me
    </button>
  );
};
```

## In React Native, the usage will be similar:

```
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from 'nim-theme';  // Import the useTheme hook

const Button = () => {
  const { theme } = useTheme();  // Get the current theme

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}>
      <Text style={{ color: theme.colors.text }}>{'Click Me'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    margin: 8,
  },
});

export default Button;
```

## Available Themes

You can either use the default themes (defaultTheme and darkTheme) or create your own custom themes as described above.

- defaultTheme: The default light theme that comes with the library.

- darkTheme: A predefined dark theme.

# Example of switching between themes:

```
import { useTheme } from 'nim-theme';  // Import the useTheme hook

const MyComponent = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div style={{ background: theme.colors.background }}>
      <button onClick={() => changeTheme(darkTheme)}>Switch to Dark Theme</button>
      <button onClick={() => changeTheme(defaultTheme)}>Switch to Default Theme</button>
    </div>
  );
};
```

### API Reference

createTheme({ colors, typography, spacing })

colors: Define primary, background, and text colors for the theme.

typography: Customize font family, font size, line height, and styles for headings like h1, h2, etc.

spacing: Define padding and margin values.

AutoThemeWrapper

Wraps your application and automatically detects the platform (ReactJS, NextJS, React Native) to apply the appropriate theme context.

useTheme

A custom hook that allows you to access the current theme and switch between themes.

```
const { theme, changeTheme } = useTheme();
```

### Platform Support

- ReactJS: Fully supported.

- NextJS: Fully supported.

- React Native: Fully supported.

### Contributing

We welcome contributions to improve the nim-theme library. If you have any suggestions or issues, feel free to open an issue or pull request!

Fork the repository.

Create your branch (git checkout -b feature-branch).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature-branch).

Create a new Pull Request.

## License

MIT License. See the LICENSE
file for more details.

## Author

nim-theme is developed and maintained by ZaYn Miraj.

```
www.zaynmiraj.com
wwww.nimcloudsystems.com
```
