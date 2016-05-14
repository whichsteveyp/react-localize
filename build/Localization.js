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

var func = _react.PropTypes.func;
var objectOf = _react.PropTypes.objectOf;
var string = _react.PropTypes.string;


var Localization = _react2.default.createClass({
  displayName: 'Localization',

  propTypes: {
    messages: objectOf(string).isRequired,
    localize: func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      messages: {},
      localize: _localizeFormatter2.default
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
  localize: function localize(key, values, defaultValue) {
    var _props = this.props;
    var messages = _props.messages;
    var localize = _props.localize;

    return localize(messages, key, values, defaultValue);
  },
  render: function render() {
    return this.props.children;
  }
});

exports.default = Localization;
module.exports = exports['default'];