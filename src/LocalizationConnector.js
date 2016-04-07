import React, {Component, PropTypes} from 'react';

export default (ComposedComponent) => {
  class ConnectLocalization extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <ComposedComponent {...this.props}/>;
    }
  }
  ConnectLocalization.displayName = 'ConnectLocalization';
  ConnectLocalization.contextTypes = {
    localize: PropTypes.func
  };
}
