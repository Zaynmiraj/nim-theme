"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _themeContext = require("../theme-context");
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/Button.js

var Button = function Button(_ref) {
  var text = _ref.text;
  var _useTheme = (0, _themeContext.useTheme)(),
    theme = _useTheme.theme;
  var styles = getStyles(theme);
  return /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.button
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.text
  }, text));
};
var getStyles = function getStyles(theme) {
  return _reactNative.StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.padding,
      margin: theme.spacing.margin
    },
    text: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily
    }
  });
};
var _default = exports["default"] = Button;