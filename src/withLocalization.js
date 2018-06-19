import React from 'react';
import { LocalizationConsumer } from '.';

export default (Component) => {
  const withLocalization = (props) => <LocalizationConsumer>
    {({ localize, xLocale, debug }) => <Component
      {...props}
      localize={localize}
      xLocale={xLocale}
      debug={debug}
    />}
  </LocalizationConsumer>;

  withLocalization.displayName = `withLocalization(${Component.name})`;
  return withLocalization;
};
