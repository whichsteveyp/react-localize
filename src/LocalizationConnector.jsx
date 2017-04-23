/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export default (ComposedComponent) => {
  const LocalizeConnected = (props, context) => {
    const { localize, _localizeDebug } = context;

    let connectedLocalizer = localize;
    if (typeof localize !== 'function') {
      // We only warn if configured for debugging, which would typically be controlled
      // by the host app environment & configuration of <Localization/>
      if (_localizeDebug) {
        console.warn(`Attempted to connect ${ComposedComponent.displayName} to react-localize, but no valid
          localize method was found on context. Did you render this in a <Localization/> conext?`);
      }

      // Regardless of _localizeDebug, we want to pass a safe to invoke method to components
      // in the event they do not have a defaultProp so that nothing blows up. This simply
      // returns the key they would have passed, e.g. `localize('label.MyText')`.
      connectedLocalizer = (key) => {
        if (_localizeDebug) console.warn(`Unable to localize ${key}, not connected to react-localize`);
        return key;
      };
    }

    return (<ComposedComponent
      {...props}
      localize={connectedLocalizer}
    />);
  };

  LocalizeConnected.displayName = `ReactLocalized(${ComposedComponent.name})`;
  LocalizeConnected.contextTypes = {
    localize: PropTypes.func
  };

  return LocalizeConnected;
};
