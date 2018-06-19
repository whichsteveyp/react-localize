Message Bundles are relatively straightforward objects that contain some
strings that map to a `key` and can be used to produce some display text
to users. Depending on how your existing bundle object is defined, you
might need to override the `localize` method.

If your bundle follows a simple structure & is `printf` format friendly:

```js
const messages = {
  save: 'Save',
  cancel: 'Cancel',
  'banner.alt.text': 'A neat graphic of our Company Brand',
  'menu.welcome.user': 'Welcome, %s!',
}
```

then you can use the defaults provided in `react-localize`.

A benefit of using `<LocalizationProvider/>` in this library, is that if
messages _change_ then your UI display text can change as well. One real
world example of this would be changing the display language without
refreshing the whole page. Here's an example of what that might look like:

```jsx
export class LanguageSwitcher extends React.Component {
  render() {
    return <LocalizationProvider messages={this.state.messages}>
      <div>
        <div>
          <p>Select Language: </p>
          <button onClick={() => this.getBundle('en')}>English</button>
          <button onClick={() => this.getBundle('fr')}>French</button>
          <button onClick={() => this.getBundle('jp')}>Japanese</button>
        </div>
        <div>{this.props.children}</div>
      </div>
    </LocalizationProvider>;
  }

  getBundle = (languageCode) => {
    // retrieve a new language bundle from the server, and store it
    // in local state for use by other components in the tree
    return fetch(`/api/bundle/${languageCode || 'en'}`)
      .then(messages => this.setState({ messages }));
  }
}
```

Of course, our language selection bar itself would likely want to be able
to take advantage of the bundle for the button values, so you'd probably
split this out a bit more in your app or use something like redux to store
the messages bundle that gets passed to `<LocalizationProvider/>`. That
part is of course up to you and what your application needs.
