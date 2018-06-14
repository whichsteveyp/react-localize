import React from 'react';
import PropTypes from 'prop-types';
import createReactContext from 'create-react-context';
import { format } from 'util';

// by default we want our consumers to just safely return the key provided
// to it, rather than exploding if not wrapped in a provider properly
const Localize = createReactContext({
  localize: key => key,
  debug: true,
  xLocale: false,
});

export class LocalizationProvider extends React.Component {
  render() {
    const { _localize: localize } = this;

    return <Localize.Provider value={{ localize }}>
      {this.props.children}
    </Localize.Provider>;
  }

  _localize = (key, values) => {
    const { localize, xLocale, messages } = this.props;

    if (xLocale) {
      return 'XXXXXX';
    }

    let localizeFn = localize;
    if (typeof localize !== 'function') {
      localizeFn = (messages, key) => {
        if (debug) console.warn(`Unable to localize ${key}, not connected to react-localize`);
        return key;
      };
    }

    return localizeFn(messages, key, values);
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    localize: PropTypes.func,
    messages: PropTypes.object.isRequired,
    xLocale: PropTypes.bool,
  }

  static defaultProps = {
    debug: false,
    localize(messages, key, values) {
      if (values) {
        return format(messages[key], values);
      }

      return format(messages[key]);
    },
    xLocale: false
  }
}

export const LocalizationConsumer = Localize.Consumer;
