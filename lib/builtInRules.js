"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var format_mail = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

function checkType(data, type) {
  if (type == _typeof(data)) {
    return true;
  }

  return false;
}

function checkStrLengRange(data) {
  var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (checkType(data, 'number')) {
    data = data.toString();
  }

  if (checkType(data, 'string')) {
    if ('undefined' != typeof conditions.min && 'undefined' != typeof conditions.max) {
      return conditions.min <= data.length && conditions.max >= data.length;
    } else if ('undefined' != typeof conditions.min) {
      return conditions.min <= data.length;
    } else if ('undefined' != typeof conditions.max) {
      return conditions.max >= data.length;
    } else {
      return false;
    }
  }

  return false;
}

function checkStrLengAbs(data) {
  var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (checkType(data, 'number')) {
    data = data.toString();
  }

  if (checkType(data, 'string')) {
    if ('undefined' != typeof conditions.absLength) {
      return conditions.absLength == data.length;
    } else {
      return false;
    }
  }

  return false;
}

function checkValueRange(data) {
  var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (checkType(data, 'number')) {
    if ('undefined' != typeof conditions.min && 'undefined' != typeof conditions.max) {
      return conditions.min <= data && conditions.max >= data;
    } else if ('undefined' != typeof conditions.min) {
      return conditions.min <= data;
    } else if ('undefined' != typeof conditions.max) {
      return conditions.max >= data;
    } else {
      return false;
    }
  }

  return false;
}

function checkValueAbs(data) {
  var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (checkType(data, 'number')) {
    if ('undefined' != typeof conditions.absValue) {
      return parseFloat(conditions.absValue) === parseFloat(data);
    } else {
      return false;
    }
  }

  return false;
}

function checkFormat(data) {
  var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (checkType(data, 'string')) {
    if ('undefined' != typeof conditions.type) {
      switch (conditions.type) {
        case 'email':
          return format_mail.test(data);
      }
    } else {
      return false;
    }
  }

  return false;
}

var _default = {
  checkType: checkType,
  checkStrLengRange: checkStrLengRange,
  checkStrLengAbs: checkStrLengAbs,
  checkValueRange: checkValueRange,
  checkValueAbs: checkValueAbs,
  checkFormat: checkFormat
};
exports["default"] = _default;