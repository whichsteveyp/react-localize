This quick start guide is designed to give you an _idea_ of how you can cover
the basics of using this module in the quickest, most succinct way. Most likely,
there will be More Too It™ than just this, but you can get a good idea of how
to get started below:

### Install it from [npm, Inc.*](http://www.npmjs.org):
`npm i react-localize`

_*or via `yarn add react-localize`_

### Wire It Up to Your App:

```js
import { LocalizationProvider, LocalizationConsumer } from 'react-localize';
// this should come from your server or localization strings bundle source
// for your application.
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
          <button>{localize('app.button.Submit')}</button>
          <p>{localize('foo.bar', ['Stephen', 34])}</p>
        </div>;
      }}
    </LocalizationConsumer>
  </AnyParentComponent>
</LocalizationProvider>
```

When your React application renders and you load it up, you should see some
Plain Old Html™ like this:

```html
<div>
  <h1>prop.MissingValue</h1>
  <button>Submit</button>
  <p>Hey Stephen, you must be 34 years old?</p>
</div>
```
