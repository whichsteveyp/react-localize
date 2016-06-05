import defaultLocalizer from './util/localize-formatter';
import get from 'lodash.get';
import React, { PropTypes } from 'react';
const { bool, func, objectOf, string } = PropTypes;

const Localization = React.createClass({
  propTypes: {
    messages: objectOf(string).isRequired,
    localize: func,
    _localizeDebug: bool,
    xLocale: bool
  },

  getDefaultProps() {
    return {
      messages: {},
      localize: defaultLocalizer,
      _localizeDebug: false,
      xLocale: false
    };
  },

  childContextTypes: {
    localize: func,
    _localizeDebug: bool
  },

  getChildContext() {
    return {
      localize: this.localize,
      _localizeDebug: this.props.debug
    };
  },

  localize(key, values=[]) {
    const { messages, xLocale } = this.props;
    const message = get(messages, key, null);

    if (xLocale) {
      return 'XXXXXX';
    }

    return this.props.localize(message, key, values);
  },

  render() {
    return this.props.children;
  }
});

export default Localization;
