# react-localize

[![Greenkeeper badge](https://badges.greenkeeper.io/sprjr/react-localize.svg)](https://greenkeeper.io/)
A simple context wrapper and text localization component for localizing strings.

[![Travis build status](http://img.shields.io/travis/sprjr/react-localize.svg?style=flat)](https://travis-ci.org/sprjr/react-localize/)

## Getting Started, Quickly:

### Install it from [npm, Inc.](http://www.npmjs.org):
`npm i react-localize`

### Use it in your React App (with <Text /> helper):

```js
import { LocalizationProvider, LocalizationConsumer } from 'react-localize';
const localizationBundle = {
  'app.button.Submit': 'Submit',
  foo: {
    bar: 'Hey %s, you must be %d years old?'
  }
};

<LocalizationProvider messages={localizationBundle}>
  <AnyParentComponent>
    <LocalizationConsumer>
      {({ localize }) => {
        return <div>
          <h1>{localize('prop.MissingValue')}</h1>
          <button>{localize('abuttonp.button.Submit')}</button>
          <p>{localize('foo.bar', ['Stephen', 34])}</p>
        </div>;
      }}
    </LocalizationConsumer>
  </AnyParentComponent>
</LocalizationProvider>

// outputs:
// <div>
// <h1>prop.MissingValue</h1>
// <button>Submit</button>
// <p>Hey Stephen, you must be 34 years old?</p>
```

### Use it in your React App Components (via withLocalization() hoc):

```js
// app.js
<Localization messages={myBundle}>
  <YourComponent />
</Localization>

// YourComponent.jsx
import TabsMaybe from 'react-bootstrap-tabs-i-guess';
import { withLocalization } from 'react-localize';

const YourComponent = (props) => {
  const tabsConfig = props.tabsArray.map((tab) => {
    return {
      id: tab.id,
      message: props.localize(tab.label)
      onClick: () => props.onTabClick(tab.id)
    };
  });

  return <TabsMaybe tabs={tabConfig} />
};

export default withLocalization(YourComponent);
```

## More Info & Usage:
`<LocalizationProvider />` exposes a `localize(key, values)` function that is passed through [ReactJS Context](https://facebook.github.io/react/docs/context.html)
to all `<LocalizationConsumer />`s in the render tree it wraps. It takes a `messages` property that should be
formatted like `{ 'mykey.path.to.Value': 'Value' }` or `{ myKey: { path: { to: { Value: 'Value' } } } }`.


### withLocalization
This connector behaves similarly to [connect()](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) in that it will take a
`Component` and wrap it inside of a `<LocalizationConsumer/>` and hoist the `localize` method onto the `props` provided to `<Component />`.

```js
import { withLocalization } from 'react-localize';

const MyComponent = props => {
  const {label, localize} = this.props;
  return <p>
    <label>{label}</label>
    <input placeholder={localize('foo')} />;
  </p>
};

export default withLocalization(MyComponent);
```

## Available Props

### xLocale
If you pass `<LocalizationProvider xLocale />` this short circuits `localize()` calls to always
return `XXXXXX`. This can be useful for viewing your UI and identifying which parts of the application
are not using localization.

### debug
Utilizing `<LocalizationProvider debug />` expands the `localize()` function to include a `console.warn`
messages when a key cannot be found or when key/messages are not provided to the function when invoked.

### localize
Internally we do a few sanity checks before invoking a simple format function (similar to util.format)
provided by default to return key/value results. You can override this behavior by providing your _own_
`localize(messages, key, values)` function to `<LocalizationProvider />`. This function will be called
in place of the default one, and you can do any lookup / formatting that you need not provided by the default.

The default `localize()` format function behaves similar to `printf` formatted strings. You can read more
about how that works on [util.format](https://nodejs.org/api/util.html#util_util_format_format) as well.
Here's some quick examples:

```js
util.format('Why hello, %s!', 'Foophen');
// 'Why hello, Foophen!'

util.format('There are %d things you have to do today', 5)
// There are 5 things you have to do today
```
