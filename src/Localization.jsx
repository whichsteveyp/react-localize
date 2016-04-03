import React, { PropTypes } from 'react';
import util from 'util';
const { func, objectOf, string } = PropTypes;

const Localization = React.createClass({
  propTypes: {
    messageBundle: objectOf(string).isRequired
  },

  getDefaultProps() {
    return {
      messageBundle: {}
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
    let string = this.props.messageBundle[key];

    if (values && string) {
      string = util.format(string, ...values);
    }

    return string || key;
  },

  render() {
    return this.props.children;
  }
});

export default Localization;
