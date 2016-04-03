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
const { string, func } = PropTypes;

const Text = (props, context) => {
  const { message, ...rest } = props;
  const { localize } = context;

  return (<span {...rest}>{localize(message)}</span>);
};

Text.displayName = 'Text';

Text.propTypes = {
  message: string.isRequired
};

Text.contextTypes = {
  localize: func.isRequired
};

export default Text;
