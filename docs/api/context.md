The contextType property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function:

```js
import { LocalizationContext } from 'react-localize';

const localizationBundle = {
  'app.button.Submit': 'Submit',
  foo: {
    bar: 'Hey %s, you must be %d years old?'
  }
};

class App extends React.PureComponent {
  render() {
    const { localize } = this.context;

    return (
      <div>
        <h1>{localize('prop.MissingValue')}</h1>
        <button>{localize('app.button.Submit')}</button>
        <p>{localize('foo.bar', ['Stephen', 34])}</p>
      </div>
    );
  }
}

App.contextType = LocalizationContext;

// outputs:
// <div>
//   <h1>prop.MissingValue</h1>
//   <button>Submit</button>
//   <p>Hey Stephen, you must be 34 years old?</p>
// </div>
```
