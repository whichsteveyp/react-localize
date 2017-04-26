'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ComposedComponent) {
  var LocalizeConnected = function LocalizeConnected(props, context) {
    var localize = context.localize,
        _localizeDebug = context._localizeDebug;


    var connectedLocalizer = localize;
    if (typeof localize !== 'function') {
      if (_localizeDebug) {
        console.warn('Attempted to connect ' + ComposedComponent.displayName + ' to react-localize, but no valid\n          localize method was found on context. Did you render this in a <Localization/> conext?');
      }

      connectedLocalizer = function connectedLocalizer(key) {
        if (_localizeDebug) console.warn('Unable to localize ' + key + ', not connected to react-localize');
        return key;
      };
    }

    return _react2.default.createElement(ComposedComponent, _extends({}, props, {
      localize: connectedLocalizer
    }));
  };

  LocalizeConnected.displayName = 'ReactLocalized(' + ComposedComponent.name + ')';
  LocalizeConnected.contextTypes = {
    localize: _propTypes2.default.func
  };

  return LocalizeConnected;
};

module.exports = exports['default'];