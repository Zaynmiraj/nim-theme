"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectPlatform = void 0;
// src/utils/detectPlatform.js
var detectPlatform = exports.detectPlatform = function detectPlatform() {
  if (typeof window !== "undefined" && window.document) {
    return "web"; // Running in the browser (ReactJS/NextJS)
  } else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return "react-native"; // Running in React Native
  } else {
    return "unknown";
  }
};