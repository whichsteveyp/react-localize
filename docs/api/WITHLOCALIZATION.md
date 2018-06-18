This connector behaves similarly to [connect()](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)
in that it will take a `Component` and wrap it inside of a
`<LocalizationConsumer/>` and hoist the `localize` method
onto the `props` provided to a given `<Component />`.

```js
import { withLocalization } from 'react-localize';

const MyComponent = props => {
  const { label, localize } = this.props;
  return <p>
    <label>{label}</label>
    <input placeholder={localize('foo')} />;
  </p>
};

const LocalizedMyComponent = withLocalization(MyComponent);

export default LocalizedMyComponent;
```

Since this causes a `<LocalizationConsumer/>` to be added to your
render output, it is not recommended that you do this for small
components. Be sure to at least consider the potential impact
this could have on performance.

From a component design perspective, it's best to simply design
their `propTypes` API to include:

```js
class Foo {
  static propTypes = {
    localize: PropTypes.func.isRequired,
  }
  // etc
}
```

When these are rendered in various places in your app you can
provide this function to them. Although this will introduce
passing props, it will reduce the number of elements that get
added to your output tree - just something to keep in mind when
using this part of the API!
