After you've installed `react-localize` and integrated it in your application
your primary interaction point will be with a `localize` function. This function
is invoked with 3 arguments: `localize(messages, key, values)`.

- `messages` is the localization bundle that was provided to the nearest parent
`<LocalizationProvider/>`. We recommend this be an object, something like this:

```js
const messages = {
  'label.Checkout': 'Checkout',
  'messages.error.accessDenied': 'Access Denied',
  'label.cart.items': '%d Items in cart',
  // etc
}
```

By default, `localize()` will do a simple `messages[key]` lookup to get the
string, and then it will run it against a `printf` style formatter passing the
string and the values to it.

The simple use cases supported out of the box look something like:

```jsx
class MyApp extends React.Component {
  render() {
    return <LocalizationConsumer>
      {({ localize }) => {
        // using the messages bundle above ^

        const itemsInCart = localize('label.cart.items', this.state.itemsCount);

        return <div>
          <p>{itemsInCart}</p>
          <button>{localize('label.Checkout')}</button>
        </div>;
      }}
    </LocalizationConsumer>;
  }
}
```

### Customizing Localization Output
As long as you can gain value from the `(messages, key, values, xLocale, debug)`
signature, you can provide an override `localize` function to the
`<LocalizationProvider/>`.

This would allow you to add in more advanced things like pluralization, or
following a different string templates format & behavior. For example, by default
we simply return the `key` if a string is not found in a bundle, that could be
overridden like so:

```jsx
const customLocalize = (messages, key, values, xLocale, debug) => {
  const messageString = _.get(messages, key, `Localization Error for: ${key}`);

  return util.format(messageString, values);
}

ReactDOM.render(<LocalizationProvider localize={customLocalize}>
</LocalizationProvider>);
```

In this example we also introduce `util.format` for our string formatting, and
we leveraged `lodash.get` to look up the string for a key, while providing a
fallback value if one was not found.
