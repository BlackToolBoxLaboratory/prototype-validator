"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _checkType = _interopRequireDefault(require("./rules/checkType.js"));

var _checkStrLength = _interopRequireDefault(require("./rules/checkStrLength.js"));

var _checkStrAbsLength = _interopRequireDefault(require("./rules/checkStrAbsLength.js"));

var _checkNumRange = _interopRequireDefault(require("./rules/checkNumRange.js"));

var _checkNumAbsValue = _interopRequireDefault(require("./rules/checkNumAbsValue.js"));

var _checkFormat = _interopRequireDefault(require("./rules/checkFormat.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validatorController = function validatorController(ruleType, value, parameters) {
  switch (ruleType) {
    case 'type':
      // return Rules.checkType(value, params);
      return (0, _checkType["default"])(value, parameters);

    case 'strLength':
      // return Rules.checkStrLengRange(value, params);
      return (0, _checkStrLength["default"])(value, parameters);

    case 'strAbsLength':
      // return Rules.checkStrLengAbs(value, params);
      return (0, _checkStrAbsLength["default"])(value, parameters);

    case 'numRange':
      // return Rules.checkValueRange(value, params);
      return (0, _checkNumRange["default"])(value, parameters);

    case 'numAbsValue':
      // return Rules.checkValueAbs(value, params);
      return (0, _checkNumAbsValue["default"])(value, parameters);

    case 'format':
      // return Rules.checkFormat(value, params);
      return (0, _checkFormat["default"])(value, parameters);

    default:
      return false;
  }
};

var _default = validatorController;
exports["default"] = _default;