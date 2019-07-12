import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import createReactContext from 'create-react-context';
import format from './util.format';

// by default we want our consumers to just safely return the key provided
// to it, rather than exploding if not wrapped in a provider properly
const Localize = createReactContext({
  localize: key => key,
  debug: true,
  xLocale: false,
});

export const useLocalize = () => { 
  if (!useContext) {
    console.warn('This feature is only available in React >= 16.8')
    return {};
  }
  
  return useContext(Localize);
};

export class LocalizationProvider extends React.Component {
  render() {
    const { _localize: localize } = this;
    const { xLocale, debug } = this.props;

    return <Localize.Provider value={{ localize, xLocale, debug }}>
      {this.props.children}
    </Localize.Provider>;
  }

  _localize = (key, values) => {
    const { localize, xLocale, messages, debug } = this.props;
    const isLocalizeProvided = localize !== LocalizationProvider.defaultProps.localize;

    let localizeFn = localize;
    if (typeof localize !== 'function') {
      localizeFn = (messages, key) => {
        if (debug) console.warn(`Unable to localize ${key}, not connected to react-localize`);
        return key;
      };
    }

    if (isLocalizeProvided) {
      // doing sanity checks against the inputs, lookup, debug, xLocale are only
      // supported for the default behavior, when users provide their own override
      // method we can defer that to them
      return localizeFn(messages, key, values, xLocale, debug);
    }

    if (!messages || !key) {
      if (debug) console.warn('Unable to localize missing messages or key in arguments.');
      return null;
    }

    const lookup = messages[key];
    if (!lookup && typeof lookup !== 'string') {
      if (debug) console.warn(`Unable to localize missing messages or key in arguments for ${key}`);
      return key;
    }

    if (xLocale) {
      return 'XXXXXX';
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
    localize(messages, key, values = null) {
      if (values) {
        return format(messages[key], values);
      }

      return format(messages[key]);
    },
    xLocale: false
  }
}

export const LocalizationConsumer = Localize.Consumer;
