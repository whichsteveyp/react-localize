import React, { PropTypes } from 'react';

export default (ComposedComponent) => {
  const ConnectLocalization = props => <ComposedComponent {...props} />;

  ConnectLocalization.displayName = 'ConnectLocalization';
  ConnectLocalization.contextTypes = {
    localize: PropTypes.func
  };
  return ConnectLocalization;
};
