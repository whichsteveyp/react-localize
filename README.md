# react-localize
A simple context wrapper and text localization component for localizing strings.

[![Travis build status](http://img.shields.io/travis/sprjr/react-localize.svg?style=flat)](https://travis-ci.org/sprjr/react-localize/)

## Getting Started, Quickly:

### Install it from [npm, Inc.](http://www.npmjs.org):
`npm i react-localize`

### Use it in your React App (with <Text /> helper):

```js
import Localization, { Text } from 'react-localize';
const localizationBundle = {
  'app.button.Submit': 'Submit',
  foo: {
    bar: 'Hey %s, you must be %d old?'
  }
};

<Localization messages={localizationBundle}>
  <AnyParentComponent>
    <Text message="prop.Val" style={{ color: 'blue' }} />
    <Text message="app.button.Submit" data-magic="pretty neat" />
    <Text message="foo.bar" values={['Foophen', 32]} style={{ color: 'red' }} />
  </AnyParentComponent>
</Localization>

// outputs (respectively):
// <span style="color: blue">prop.Val</span>
// <span data-magic="pretty neat">Submit</span>
// <span style="color: red">Hey Foophen, you must be 32 old?</span>
```

### Use it in your React App (with context.localize() method):

```js
// app.js
<Localization messages={myBundle}>
  <YourComponent />
</Localization>

// YourComponent.jsx
import TabsMaybe from 'react-bootstrap-tabs-i-guess';

export default YourComponent = (props, context) => {
  const tabsConfig = props.tabsArray.map((tab) => {
    return {
      id: tab.id,
      message: context.localize(tab.label)
      onClick: () => props.onTabClick(tab.id)
    };
  });

  return <TabsMaybe tabs={tabConfig} />
};
```

## More Info & Usage:
`<Localization />` exposes a `localize(key, values)` function that is passed through [ReactJS Context](https://facebook.github.io/react/docs/context.html) to all children in the render tree it wraps. It takes a `messages` property that should be formatted like `{ 'mykey.path.to.Value': 'Value' }` or `{ myKey: { path: { to: { Value: 'Value' } } } }`.

The `<Text />` component is just a wrapper intended to help you out when you don't need or want to wire your component up to `contextTypes` and process things yourself. All it's really doing it helping you call `localize(key, values)`. By default it returns a span with all the other props you pass this component. Because this renders a `<span>` it's not always useful, for example when localizing `<input placeholder='something' />`.

### LocalizationConnector
This connector behaves similarly to [connect()](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) in that it will take a `context.localize()` function provided by `<Localization/>` and then pass it as a prop to the component you're intending to use.

```js
import { LocalizationConnector } from 'react-localize';

const MyComponent = props => {
  const {label, localize} = this.props;
  return <p>
    <label>{label}</label>
    <input placeholder={localize('foo')} />;
  </p>
};

export default LocalizationConnector(MyComponent);
```

### LocalizationWrapper
There's also an HOC wrapper to quickly provide childContextTypes for a given component. Let's redo the first example above using this pattern:

```js
// app.js
import { LocalizationWrapper } from 'react-localize';
import MyApp from './app.js';

const localizationBundle = {
  'app.button.Submit': 'Submit',
  foo: {
    bar: 'Hey %s, you must be %d old?'
  }
};

export default LocalizationWrapper(MyApp, localizationBundle)
```

This is just a convenience HOC for declaring `childContextTypes` for your app, the same way `<Localization><MyApp /></Localization>` does.


## Available Props

### xLocale
If you pass `<Localization xLocale={true} />` this short circuits `context.localize()` calls to always return `XXXXXX`. This can be useful for viewing your UI and identifying which parts of the application are not using localization.

### debug
Utilizing `<Localization debug={true} />` expands the `<Text />` helper to include an HTML attribute `data-original-message`, which will be set to the `message` prop given. This can be useful in areas like Chrome DevTools where you want to see what key an element is using to localize things without having to swap back to your code.

### localize
`context.localize(key, values)` simply tries to look `messageBundle[key]` up using `lodash/get`. It then calls `this.props.localize(message, key, values);` so that the string can be formatted, you can utilize the default formatter function we provide, or you can override this to suit your needs. If the key is not found on your bundle, by default you'll receive the key back.

The default `localize()` format function behaves similar to `printf` formatted strings. You can read more about how that works on [util.format](https://nodejs.org/api/util.html#util_util_format_format) as well. Here's some quick examples:

```js
util.format('Why hello, %s!', 'Foophen');
// 'Why hello, Foophen!'

util.format('There are %d things you have to do today', 5)
// There are 5 things you have to do today
```

## Testing
React is in package.json's dev and peer dependencies because React is required for running the tests. You'll need to build before the tests will work as they're run against the built files. We're using Puny to test because tests for react-localize should be simple & fast.

```sh
npm run build
npm t
```
