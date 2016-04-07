import React, { PropTypes } from 'react';
const { func, objectOf, string } = PropTypes;
import defaultLocalizer from './util/localize-formatter';

const Localization = React.createClass({
  propTypes: {
    messages: objectOf(string).isRequired,
    localize: func
  },

  getDefaultProps() {
    return {
      messages: {},
      localize: defaultLocalizer
    };
  },

  childContextTypes: {
    localize: func
  },

  getChildContext() {
    return {
      localize: this.localize
    };
  },

  localize(key, values, defaultValue) {
    const { messages, localize } = this.props;
    return localize(messages, key, values, defaultValue);
  },

  render() {
    return this.props.children;
  }
});

export default Localization;
