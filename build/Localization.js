'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = _react.PropTypes.func;
var objectOf = _react.PropTypes.objectOf;
var string = _react.PropTypes.string;


var Localization = _react2.default.createClass({
  displayName: 'Localization',

  propTypes: {
    messageBundle: objectOf(string).isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      messageBundle: {}
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
    var string = this.props.messageBundle[key];
    return string || key;
  },
  render: function render() {
    return this.props.children;
  }
});

exports.default = Localization;