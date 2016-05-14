'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (messages, key, values, defaultValue) {
  var string = (0, _get2.default)(messages, key, defaultValue || key);

  if (values && string) {
    return _util2.default.format.apply(_util2.default, [string].concat(_toConsumableArray(values)));
  }

  return string;
};

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = exports['default'];