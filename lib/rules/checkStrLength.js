"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _checkType = _interopRequireDefault(require("./checkType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
  parameter = {
    [Number] min
    [Number] max
  }
*/
function checkStrLength(data, parameter) {
  if (!(0, _checkType["default"])(data, {
    type: 'string'
  })) {
    return false;
  }

  var min = parameter.min ? parseInt(parameter.min) : undefined;
  var max = parameter.max ? parseInt(parameter.max) : undefined;

  if ((0, _checkType["default"])(min, {
    type: 'number'
  }) && (0, _checkType["default"])(max, {
    type: 'number'
  })) {
    return min <= data.length && max >= data.length;
  } else if ((0, _checkType["default"])(min, {
    type: 'number'
  })) {
    return min <= data.length;
  } else if ((0, _checkType["default"])(max, {
    type: 'number'
  })) {
    return max >= data.length;
  } else {
    return false;
  }
}

var _default = checkStrLength;
exports["default"] = _default;