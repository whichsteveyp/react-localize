`react-localize` exports the following named exports:

* [LocalizationProvider](PROVIDER.md)
* [LocalizationConsumer](CONSUMER.md)
* [withLocalization](WITHLOCALIZATION.md)

To use this library, you need to use at least _two_ of the
above exports or you won't really be getting any value
from this library.

If you're not familiar with [React Context](https://reactjs.org/docs/context.html)
you should check that out to familiarize yourself with how
it works. `react-localize` is really just a pattern on top
of this concept to help provide a string formatter to your
components so they can localize messages that are displayed
to your user.

You can use the above pieces during an [internationalization](https://en.wikipedia.org/wiki/Internationalization_and_localization)
project for your application to allow your components to
localize as follows:

### Before
```jsx
// a non-localized component that will always render
// the same text for the user(s)
render() {
  return <div>
    <p>Shopping Cart</p>
    <p>You have {this.state.count} items in your cart</p>
  </div>
}
```

### After
```jsx
// a component designed with localization in mind
render() {
  const { localize } = this.props;
  return <div>
    <p>{localize('label.ShoppingCart')}</p>
    <p>{localize('label.CartItemsCount', [this.state.count])}</p>
  </div>
}
```

In the second example, the text that is displayed to a user is
controlled outside of the render method. The primary benefit
here is that you can change this value as translations may need,
or if a user language preference changes.
