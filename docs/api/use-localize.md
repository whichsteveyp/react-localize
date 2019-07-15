`useLocalize` function is built on top of [useContext React Hook](https://reactjs.org/docs/hooks-reference.html#usecontext). Hooks functionality is supported only in pure components.

```js
import { useLocalize } from 'react-localize';

const localizationBundle = {
  'app.button.Submit': 'Submit',
  foo: {
    bar: 'Hey %s, you must be %d years old?'
  }
};

const PureFn = () => {
  const { localize } = useLocalize();

  return (
    <div>
      <h1>{localize('prop.MissingValue')}</h1>
      <button>{localize('app.button.Submit')}</button>
      <p>{localize('foo.bar', ['Stephen', 34])}</p>
    </div>
  )
};

// outputs:
// <div>
//   <h1>prop.MissingValue</h1>
//   <button>Submit</button>
//   <p>Hey Stephen, you must be 34 years old?</p>
// </div>
```