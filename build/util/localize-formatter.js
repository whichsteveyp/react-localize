'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (message, key, values) {
  if (message) {
    return _util2.default.format.apply(_util2.default, [message].concat(_toConsumableArray(values)));
  }

  return key;
};

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = exports['default'];