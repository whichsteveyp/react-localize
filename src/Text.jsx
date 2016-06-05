/*
 * Consumes context for localizing a given string from `<Localization />`
 * in the render chain above this.
 *
 * Given:
 * <Localization messageBundle={{ strings: { HelloWorld: 'Hello, World!' }}}
 *  <AnyParent>
 *    <Text message='localized.strings.HelloWord' style={{ color: 'blue' }} />
 *  </AnyParent>
 * </Localization>
 *
 * Output: <span style={{ color: 'blue' }}>Hello, World!</span>
 */

import React, { PropTypes } from 'react';
const { array, bool, func, string } = PropTypes;

const Text = (props, context) => {
  const { message, values, ...rest } = props;
  const { localize, _localizeDebug } = context;

  let localized = message;

  if (typeof localize === 'function') {
    localized = localize(message, [...values]);
  }

  if (_localizeDebug) {
    rest['data-original-message'] = message;
  }

  return (<span {...rest}>{localized}</span>);
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
  localize: func.isRequired,
  _localizeDebug: bool
};

export default Text;
