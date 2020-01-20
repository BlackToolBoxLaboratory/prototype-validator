"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _checkType = _interopRequireDefault(require("./checkType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var format_email = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
var format_numeric = /^\d+$/; // number is avaliable

var format_literal = /^\w+$/; // english, number and '_' are avaliable

var format_ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/; // var format_ipv4 = /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/;

var format_mac = /^(?:(?:[0-9a-f]{2}):){5}(?:[0-9a-f]{2})/i; // var format_mac = /^([0-9a-f]{2}):([0-9a-f]{2}):([0-9a-f]{2}):([0-9a-f]{2}):([0-9a-f]{2}):([0-9a-f]{2})$/i;

/*
  parameter = {
    [String] type: format type
  }
*/

function checkFormat(data, parameter) {
  if (!(0, _checkType["default"])(data, {
    type: 'string'
  })) {
    return false;
  }

  switch (parameter.type) {
    case 'email':
      return format_email.test(data);

    case 'numeric':
      return format_numeric.test(data);

    case 'literal':
      return format_literal.test(data);

    case 'ivp4':
      return format_ipv4.test(data);

    case 'mac':
      return format_mac.test(data);

    default:
      return false;
  }
}

var _default = checkFormat;
exports["default"] = _default;