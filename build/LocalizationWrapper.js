'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _localizeFormatter = require('./util/localize-formatter');

var _localizeFormatter2 = _interopRequireDefault(_localizeFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ComposedComponent) {
  var messages = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var customLocalizer = arguments[2];

  var ConfigureLocalization = function (_Component) {
    _inherits(ConfigureLocalization, _Component);

    function ConfigureLocalization() {
      _classCallCheck(this, ConfigureLocalization);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ConfigureLocalization).apply(this, arguments));
    }

    _createClass(ConfigureLocalization, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          localize: this.localize
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, this.props);
      }
    }], [{
      key: 'localize',
      value: function localize(key, values) {
        var message = (0, _lodash2.default)(messages, key, null);

        if (typeof customLocalizer === 'function') {
          return customLocalizer(message, key, values);
        }

        return (0, _localizeFormatter2.default)(message, key, values);
      }
    }]);

    return ConfigureLocalization;
  }(_react.Component);

  ConfigureLocalization.displayName = 'Wrapped' + (ComposedComponent.displayName || ComposedComponent.name || 'Component');
  ConfigureLocalization.childContextTypes = _extends({}, ComposedComponent.childContextTypes, { localize: _react.PropTypes.func });

  return ConfigureLocalization;
};

module.exports = exports['default'];