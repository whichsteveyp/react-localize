'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _localizeFormatter = require('./util/localize-formatter');

var _localizeFormatter2 = _interopRequireDefault(_localizeFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var element = _react.PropTypes.element;
var bool = _react.PropTypes.bool;
var func = _react.PropTypes.func;
var object = _react.PropTypes.object;

var Localization = function (_React$Component) {
  _inherits(Localization, _React$Component);

  function Localization(props, context) {
    _classCallCheck(this, Localization);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Localization).call(this, props, context));

    _this.localize = _this.localize.bind(_this);
    return _this;
  }

  _createClass(Localization, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        _localizeDebug: this.props.debug,
        localize: this.localize
      };
    }
  }, {
    key: 'localize',
    value: function localize(key, values) {
      values = values || [];
      var _props = this.props;
      var messages = _props.messages;
      var xLocale = _props.xLocale;


      if (xLocale) {
        return 'XXXXXX';
      }

      var message = (0, _lodash2.default)(messages, key, null);
      return this.props.localize(message, key, values);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return Localization;
}(_react2.default.Component);

Localization.propTypes = {
  children: element,
  debug: bool,
  localize: func,
  messages: object.isRequired,
  xLocale: bool
};

Localization.defaultProps = {
  debug: false,
  localize: _localizeFormatter2.default,
  messages: {},
  xLocale: false
};

Localization.childContextTypes = {
  _localizeDebug: bool,
  localize: func
};

exports.default = Localization;
module.exports = exports['default'];