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
  const { message, values, ...rest } = props;
  const { localize } = context;

  return (<span {...rest}>{localize(message, ...values)}</span>);
};

Text.displayName = 'Text';

Text.propTypes = {
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
