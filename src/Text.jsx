/*
 * Consumes context for localizing a given string from `<Localization />`
 * in the render chain above this.
 *
 * Given:
 * <Localization messageBundle={{ strings: { HelloWorld: 'Hello, World!' }}}
 *  <AnyParent>
 *    <Text key='localized.strings.HelloWord' style={{ color: 'blue' }} />
 *  </AnyParent>
 * </Localization>
 *
 * Output: <span style={{ color: 'blue' }}>Hello, World!</span>
 */

import React, { PropTypes } from 'react';
const { array, func, string } = PropTypes;

const Text = (props, context) => {
  const { message, children, values, ...rest } = props;
  const { localize } = context;

  let localized = message;

  if (typeof localize === 'function') {
    localized = localize(message, ...values);
  }

  // allow for optional alternative API using render-prop pattern
  if (typeof children === 'function') {
    return children(localized, message, ...values);
  } else {
    return (<span {...rest}>{localized}</span>);
  }
};

Text.displayName = 'Text';

Text.propTypes = {
  children: func,
  message: string.isRequired,
  values: array
};

Text.defaultProps = {
  values: []
};

Text.contextTypes = {
  localize: func.isRequired
};

export default Text;
