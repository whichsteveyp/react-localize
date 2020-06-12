Throughout the project evolution we have not put together a migration guide
for the changes leading up to `4.0.0`, and relied mostly on our `CHANGELOG`.
Since this API change is the most significant, we put together this guide to
help you ensure the best possible migration. If you're still having issues,
[ask for help!](https://github.com/stevey-p/react-localize/issues/new).

### Migrating the Provider
Previously, our context wrapper was exported like so:
```js
import { Localization } from 'react-localize';
```

In the 4.x release, all of the top level props remained the same but you need
to use the component under it's new name anywhere you previously were using
`<Localization></Localization>` in your app:

```js
import { LocalizationProvider as Localization } from 'react-localize';
```

Of course, you don't _have_ to rename it back to `<Localization/>` but you can
if that is preferred to change both the import name _and_ the component name.

### Migrating `localizationConnect()` to `withLocalization()`
This step should be straightforward and you can simply find & replace this
throughout your code base. Be sure to change both the `import` and the usage
of the wrapper:

```js
// before:
// import { localizationConnector } from 'react-localize';

// now:
import { withLocalization } from 'react-localize';

class MyReactComponent extends React.Component {
  render() {
    const { localize } = this.props;

    return localize('a.key');
  }
}

// before:
// export default localizationConnector(MyReactComponent);
// now:
export default withLocalization(MyReactComponent);
```

### Migrating from `context` to `props`
Previous versions of React context allowed components themselves to define
pieces of context they wished to be provided via `contextTypes`. This API was
removed in newer versions of React, so you need to remove any code referencing
the `localize` method in `contextTypes` or on `this.context`:

```js
export class MyContextComponent extends React.Component {
  render() {
    const { localize } = this.context;

    return localize('a.context.key');
  }

  static contextTypes = {
    localize: PropTypes.func,
  }
}
```

You can either use `withLocalization(MyContextComponent)` to simply access the
`localize` method on props aka `const { localize } = this.props;`, or you can
use the `<LocalizationConsumer>` component. Here's how that would like for the
above component:

```js
import { LocalizationConsumer } from 'react-localize';

export class MyContextComponent extends React.Component {
  render() {
    return <LocalizationConsumer>
      {({ localize }) => {
        return localize('a.context.key');
      }}
    </LocalizationConsumer>;
  }
}
```

### Migrating `<LocalizationWrapper/>` Usage
This component was removed from the library. It was essentially syntax sugar for
adding context, childContextTypes, etc, to a provided component. You should be
using the `<LocalizationProvider></LocalizationProvider>` to wrap any portions
of your tree that need to consume the `localize()` method on context.

### Migrating `<Text/>` Usage
The `<Text/>` component is another one we removed from the API. While it can be
useful in some cases, and can make your JSX a little easier to read, we wanted
to move this to application land to help reduce bundle size for folks not using
it. It's still really easy to build and consume in your apps. Here's an example
of what that might look like if you wanted to leave your app code using this
component unchanged:

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocalizationConsumer } from 'react-localize';

class Text extends React.Component {
  render() {
    const { message, values, localize, ...rest } = this.props;

    return <LocalizationConsumer>
      {({ localize, debug, xLocale }) => {
        if (debug) {
          rest['data-original-message'] = message;

          return <span {...rest}>{localize(message, values)}</span>;
        }
      }}
    </LocalizationConsumer>;
  }
}

export default withLocalization(Text);
```

This also gives you more control over what element is rendered, what erorrs or
warnings happen, and how you handle debug/xLocale. You would use the above
component the same way as the old one, like so:

```js
import Text from './text-localization.js';
import utils from './utils.js';

class MyApp extends React.Component {
  render() {
    return <div>
      <Text message="label.welcomeUser" values={[utils.getUsername()]} />
      <p><Text message="other.user.text" /></p>
    </div>;
  }
}
```
