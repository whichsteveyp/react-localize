'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = _react.PropTypes.func;
var objectOf = _react.PropTypes.objectOf;
var string = _react.PropTypes.string;


var Localization = _react2.default.createClass({
  displayName: 'Localization',

  propTypes: {
    messages: objectOf(string).isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      messages: {}
    };
  },


  childContextTypes: {
    localize: func
  },

  getChildContext: function getChildContext() {
    return {
      localize: this.localize
    };
  },
  localize: function localize(key) {
    var messages = this.props.messages;

    var string = (0, _get2.default)(messages, key, key);

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    if (values && string) {
      string = _util2.default.format.apply(_util2.default, [string].concat(values));
    }

    return string;
  },
  render: function render() {
    return this.props.children;
  }
});

exports.default = Localization;
module.exports = exports['default'];