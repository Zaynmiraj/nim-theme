// src/utils/detectPlatform.js
export const detectPlatform = () => {
  if (typeof window !== "undefined" && window.document) {
    return "web"; // Running in the browser (ReactJS/NextJS)
  } else if (
    typeof navigator !== "undefined" &&
    navigator.product === "ReactNative"
  ) {
    return "react-native"; // Running in React Native
  } else {
    return "unknown";
  }
};
