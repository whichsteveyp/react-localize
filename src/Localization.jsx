import get from 'lodash.get';
import React, { PropTypes } from 'react';
import defaultLocalizer from './util/localize-formatter';

const { element, bool, func, objectOf, string } = PropTypes;

class Localization extends React.Component {
  getChildContext() {
    return {
      _localizeDebug: this.props.debug,
      localize: this.localize
    };
  }

  localize(key, values) {
    values = values || [];
    const { messages, xLocale } = this.props;

    if (xLocale) {
      return 'XXXXXX';
    }

    const message = get(messages, key, null);
    return this.props.localize(message, key, values);
  }

  render() {
    return this.props.children;
  }
}

Localization.propTypes = {
  children: element,
  debug: bool,
  localize: func,
  messages: objectOf(string).isRequired,
  xLocale: bool
};

Localization.defaultProps = {
  debug: false,
  localize: defaultLocalizer,
  messages: {},
  xLocale: false
};

Localization.childContextTypes = {
  _localizeDebug: bool,
  localize: func
};

export default Localization;
