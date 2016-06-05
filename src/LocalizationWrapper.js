import React, {Component, PropTypes} from 'react';
import get from 'lodash.get';
import defaultLocalizer from './util/localize-formatter';

export default (ComposedComponent, messages = {}, customLocalizer) => {
  class ConfigureLocalization extends Component {
    constructor(props) {
      super(props);
    }
    getChildContext() {
      return {
        localize: this.localize
      };
    }
    localize(key, values) {
      const message = get(messages, key, null);

      if(typeof customLocalizer === 'function') {
        return customLocalizer(message, key, values);
      }
      return defaultLocalizer(message, key, values);
    }
    render() {
      return <ComposedComponent {...this.props}/>;
    }
  }

  ConfigureLocalization.displayName = 'ConfigureLocalization';
  ConfigureLocalization.childContextTypes = {
    localize: PropTypes.func
  };
  return ConfigureLocalization;
}
