import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import defaultLocalizer from './util/localize-formatter';

export default (ComposedComponent, messages = {}, customLocalizer) => {
  class ConfigureLocalization extends Component {
    static localize(key, values) {
      const message = get(messages, key, null);

      if (typeof customLocalizer === 'function') {
        return customLocalizer(message, key, values);
      }

      return defaultLocalizer(message, key, values);
    }

    getChildContext() {
      return {
        localize: this.localize
      };
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  ConfigureLocalization.displayName = `Wrapped${ComposedComponent.displayName || ComposedComponent.name || 'Component'}`;
  ConfigureLocalization.childContextTypes = Object.assign(
    {},
    ComposedComponent.childContextTypes,
    { localize: PropTypes.func }
  );

  return ConfigureLocalization;
};
