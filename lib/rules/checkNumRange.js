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
function checkNumRange(data, parameter) {
  if (!(0, _checkType["default"])(data, {
    type: 'number'
  })) {
    return false;
  }

  var min = parameter.min ? parseFloat(parameter.min) : undefined;
  var max = parameter.max ? parseFloat(parameter.max) : undefined;

  if ((0, _checkType["default"])(min, {
    type: 'number'
  }) && (0, _checkType["default"])(max, {
    type: 'number'
  })) {
    return min <= data && max >= data;
  } else if ((0, _checkType["default"])(min, {
    type: 'number'
  })) {
    return min <= data;
  } else if ((0, _checkType["default"])(max, {
    type: 'number'
  })) {
    return max >= data;
  } else {
    return false;
  }
}

var _default = checkNumRange;
exports["default"] = _default;