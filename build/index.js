'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localizationConnector = exports.LocalizationWrapper = exports.Text = undefined;

var _Localization = require('./Localization');

var _Localization2 = _interopRequireDefault(_Localization);

var _LocalizationConnector = require('./LocalizationConnector');

var _LocalizationConnector2 = _interopRequireDefault(_LocalizationConnector);

var _LocalizationWrapper = require('./LocalizationWrapper');

var _LocalizationWrapper2 = _interopRequireDefault(_LocalizationWrapper);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Localization2.default;
exports.Text = _Text2.default;
exports.LocalizationWrapper = _LocalizationWrapper2.default;
exports.localizationConnector = _LocalizationConnector2.default;