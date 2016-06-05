'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localizeFormatter = require('./util/localize-formatter');

var _localizeFormatter2 = _interopRequireDefault(_localizeFormatter);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;
var objectOf = _react.PropTypes.objectOf;
var string = _react.PropTypes.string;


var Localization = _react2.default.createClass({
  displayName: 'Localization',

  propTypes: {
    messages: objectOf(string).isRequired,
    localize: func,
    _localizeDebug: bool,
    xLocale: bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      messages: {},
      localize: _localizeFormatter2.default,
      _localizeDebug: false,
      xLocale: false
    };
  },


  childContextTypes: {
    localize: func,
    _localizeDebug: bool
  },

  getChildContext: function getChildContext() {
    return {
      localize: this.localize,
      _localizeDebug: this.props.debug
    };
  },
  localize: function localize(key, values) {
    var _props = this.props;
    var messages = _props.messages;
    var xLocale = _props.xLocale;

    var message = (0, _lodash2.default)(messages, key, null);

    if (xLocale) {
      return 'XXXXXX';
    }

    return this.props.localize(message, key, values);
  },
  render: function render() {
    return this.props.children;
  }
});

exports.default = Localization;
module.exports = exports['default'];