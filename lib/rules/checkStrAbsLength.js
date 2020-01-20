"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _checkType = _interopRequireDefault(require("./checkType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
  parameter = {
    [Number] absolute
  }
*/
function checkStrAbsLength(data, parameter) {
  if (!(0, _checkType["default"])(data, {
    type: 'string'
  })) {
    return false;
  }

  var absolute = parseInt(parameter.absolute);

  if ((0, _checkType["default"])(absolute, {
    type: 'number'
  })) {
    return absolute === data.length;
  }

  return false;
}

var _default = checkStrAbsLength;
exports["default"] = _default;