import React, { PropTypes } from 'react';
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
    console.log(this.props, key);

    // TODO: Implement proper bundle/key lookup & formatting
    const string = this.props.messageBundle[key];
    return string || key;
  },

  render() {
    return this.props.children;
  }
});

export default Localization;
