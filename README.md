# react-localize
A simple React Context wrapper and text localization component
for localizing strings.

[![Travis build status](http://img.shields.io/travis/sprjr/react-localize.svg?style=flat)](https://travis-ci.org/sprjr/react-localize/)
[![Greenkeeper badge](https://badges.greenkeeper.io/sprjr/react-localize.svg)](https://greenkeeper.io/)

## Getting Started, Quickly:

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
          <button>{localize('abuttonp.button.Submit')}</button>
          <p>{localize('foo.bar', ['Stephen', 34])}</p>
        </div>;
      }}
    </LocalizationConsumer>
  </AnyParentComponent>
</LocalizationProvider>

// outputs:
// <div>
//   <h1>prop.MissingValue</h1>
//   <button>Submit</button>
//   <p>Hey Stephen, you must be 34 years old?</p>
// </div>
```

Please refer to our [gitbook documentation](https://reactlocalize.gitbook.io/docs/)
for more detailed information & resources.
