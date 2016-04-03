'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var string = _react.PropTypes.string;
var func = _react.PropTypes.func;


var Text = function Text(props, context) {
  var message = props.message;

  var rest = _objectWithoutProperties(props, ['message']);

  var localize = context.localize;


  return _react2.default.createElement(
    'span',
    rest,
    localize(message)
  );
};

Text.displayName = 'Text';

Text.propTypes = {
  message: string.isRequired
};

Text.contextTypes = {
  localize: func.isRequired
};

exports.default = Text;