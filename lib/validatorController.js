"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _builtInRules = _interopRequireDefault(require("./builtInRules.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validatorController = function validatorController(ruleType, value, params) {
  switch (ruleType) {
    case 'type':
      return _builtInRules["default"].checkType(value, params);

    case 'length':
      return _builtInRules["default"].checkStrLengRange(value, params);

    case 'absLength':
      return _builtInRules["default"].checkStrLengAbs(value, params);

    case 'range':
      return _builtInRules["default"].checkValueRange(value, params);

    case 'absValue':
      return _builtInRules["default"].checkValueAbs(value, params);

    case 'format':
      return _builtInRules["default"].checkFormat(value, params);

    default:
      return false;
  }
};

var _default = validatorController;
exports["default"] = _default;