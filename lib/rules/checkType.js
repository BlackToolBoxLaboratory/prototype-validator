"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
  parameter = {
    [String] type
  }
*/
function checkType(data, parameter) {
  if (typeof parameter.type !== 'undefined') {
    return _typeof(data) == parameter.type;
  } else {
    return false;
  }
}

var _default = checkType;
exports["default"] = _default;