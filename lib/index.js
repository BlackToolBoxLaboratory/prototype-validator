"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _validatorController = _interopRequireDefault(require("./validatorController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// structure of status
var structureStatus = function structureStatus() {
  this.message = '';
  this.status = 'none';
};

var BTBValidator = function BTBValidator() {
  var eventRules = {};
  var eventStatus = {};

  var init = function init(newRules) {
    eventRules = newRules || {};
    reset();
    return eventRules;
  };

  var status = function status(eventKey) {
    return eventKey ? eventStatus[eventKey] : eventStatus;
  };

  var reset = function reset() {
    eventStatus = {};
    Object.keys(eventRules).map(function (eventKey) {
      eventStatus[eventKey] = new structureStatus();
    });
    return eventStatus;
  };

  var validate = function validate(eventKey, eventValue) {
    var result = new structureStatus();
    var ruleType, ruleParams, paramsObj;

    if (eventRules[eventKey]) {
      eventRules[eventKey].find(function (checkRule) {
        var checkFail = false;

        switch (_typeof(checkRule.rule)) {
          case 'string':
            // buildin function
            var _checkRule$rule$split = checkRule.rule.split('|');

            var _checkRule$rule$split2 = _slicedToArray(_checkRule$rule$split, 2);

            ruleType = _checkRule$rule$split2[0];
            ruleParams = _checkRule$rule$split2[1];

            if (ruleType) {
              paramsObj = getParams(ruleParams);

              if ((0, _validatorController["default"])(ruleType, eventValue, paramsObj)) {
                result.message = '';
                result.status = 'pass';
                checkFail = false;
              } else {
                result.message = checkRule.message;
                result.status = checkRule.level;
                checkFail = true;
              }
            } else {
              result.message = "'BTB error: There has rule empty for the event key: ".concat(eventKey);
              result.type = 'BTB error';
              checkFail = true;
            }

            break;

          case 'function':
            // customized function
            if (checkRule.rule(eventValue)) {
              result.message = '';
              result.status = 'pass';
              checkFail = false;
            } else {
              result.message = checkRule.message;
              result.status = checkRule.level;
              checkFail = true;
            }

            break;
        }

        return checkFail;
      });
      eventStatus[eventKey] = result;
    } else {
      result.message = "'BTB error: There is no rule for the event key: ".concat(eventKey);
      result.type = 'BTB error';
    }

    return result;
  };

  var getParams = function getParams(paramStr) {
    var result = {};

    if (paramStr) {
      paramStr.split(';').map(function (param) {
        var _param$split = param.split(':'),
            _param$split2 = _slicedToArray(_param$split, 2),
            key = _param$split2[0],
            value = _param$split2[1];

        if (typeof key !== 'undefined' && typeof value !== 'undefined') {
          result[key] = value;
        }
      });
    }

    return result;
  };

  return {
    init: init,
    status: status,
    reset: reset,
    validate: validate
  };
};

exports["default"] = BTBValidator;