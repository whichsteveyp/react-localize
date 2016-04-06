import get from 'lodash/get';
import React, { PropTypes } from 'react';
import util from 'util';
const { func, objectOf, string } = PropTypes;

const Localization = React.createClass({
  propTypes: {
    messages: objectOf(string).isRequired,
    localize: func
  },

  getDefaultProps() {
    return {
      messages: {},
      localize(messages, key, ...values) {

        // This is the default implementation for looking up a localization string by key
        // You can override this functionality by via prop e.g.
        // `<Localization localize={(messages, key, ...values) => { /* do your thing */ } />`
        let string = get(messages, key, key);

        if (values && string) {
          string = util.format(string, ...values);
        }

        return string;
      },
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
    const { messages, localize } = this.props;
    localize(messages, key, ...values);
  },

  render() {
    return this.props.children;
  }
});

export default Localization;
