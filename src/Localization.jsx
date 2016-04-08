import get from 'lodash.get';
import React, { PropTypes } from 'react';
import util from 'util';
const { func, objectOf, string } = PropTypes;

const Localization = React.createClass({
  propTypes: {
    messages: objectOf(string).isRequired
  },

  getDefaultProps() {
    return {
      messages: {}
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

  localize(key, ...values) {
    const { messages } = this.props;
    let string = get(messages, key, key);

    if (values && string) {
      string = util.format(string, ...values);
    }

    return string;
  },

  render() {
    return this.props.children;
  }
});

export default Localization;
