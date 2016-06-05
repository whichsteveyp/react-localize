'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var array = _react.PropTypes.array;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;
var string = _react.PropTypes.string;


var Text = function Text(props, context) {
  var message = props.message;
  var values = props.values;

  var rest = _objectWithoutProperties(props, ['message', 'values']);

  var localize = context.localize;
  var _localizeDebug = context._localizeDebug;


  var localized = message;

  if (typeof localize === 'function') {
    localized = localize(message, [].concat(_toConsumableArray(values)));
  }

  if (_localizeDebug) {
    rest['data-originalMessage'] = message;
  }

  return _react2.default.createElement(
    'span',
    rest,
    localized
  );
};

Text.displayName = 'Text';

Text.propTypes = {
  message: string.isRequired,
  values: array
};

Text.defaultProps = {
  values: []
};

Text.contextTypes = {
  localize: func.isRequired,
  _localizeDebug: bool
};

exports.default = Text;
module.exports = exports['default'];