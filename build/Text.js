'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var arrayOf = _propTypes2.default.arrayOf,
    bool = _propTypes2.default.bool,
    func = _propTypes2.default.func,
    string = _propTypes2.default.string,
    any = _propTypes2.default.any;


var Text = function Text(props, context) {
  var message = props.message,
      values = props.values,
      rest = _objectWithoutProperties(props, ['message', 'values']);

  var localize = context.localize,
      _localizeDebug = context._localizeDebug;


  var localized = message;

  if (typeof localize === 'function') {
    localized = localize(message, values);
  }

  if (_localizeDebug) {
    rest['data-original-message'] = message;
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
  values: arrayOf(any)
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