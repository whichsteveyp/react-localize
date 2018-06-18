import React from 'react';
import { LocalizationConsumer } from '.';

export default (Component) => {
  const withLocalization = (props) => <LocalizationConsumer>
    {({ localize }) => <Component
      {...props}
      localize={localize}
    />}
  </LocalizationConsumer>;

  withLocalization.displayName = `withLocalization(${Component.name})`;
  return withLocalization;
};
