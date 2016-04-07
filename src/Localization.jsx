import React, { PropTypes } from 'react';
const { func, objectOf, string } = PropTypes;
import defaultLocalize from './util/localize-formatter';

const Localization = React.createClass({
  propTypes: {
    messages: objectOf(string).isRequired,
    localize: func
  },

  getDefaultProps() {
    return {
      messages: {},
      localize: defaultLocalize
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

  localize(key, values) {
    const { messages, localize } = this.props;
    return localize(messages, key, values);
  },

  render() {
    return this.props.children;
  }
});

export default Localization;
