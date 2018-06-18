This is the primary wrapper component for this library. Most apps
likely only need one of these, at or near the top of the render
tree. However, you can provide different levels / messages at
each level if necessary. The `<LocalizationProvider />` takes
the following properties:


### messages
This is your localization bundle, and it should be an object with
a format like so:

```js
const messages = {
  foo: 'bar',
  'label.baz': 'bat',
  // etc
}
```

The default `localize` function does a simple `messages[key]`
lookup. If your bundle requires a different format (e.g. nested
like so: `{ labels: { error: 'error', ... }, ... }`) you may need
to override the `localize` function property (below).

### localize
Internally we do a few sanity checks before invoking a simple format
function (similar to util.format) provided by default to return
key/value results. You can override this behavior by providing your
_own_ `localize(messages, key, values)` function to
`<LocalizationProvider />`. This function will be called in place
of the default one, and you can do any lookup / formatting that
you need not provided by the default.

The default `localize()` format function behaves similar to `printf`
formatted strings. You can read more about how that works on
[util.format](https://nodejs.org/api/util.html#util_util_format_format) as well.

Here's some quick examples:

```js
util.format('Why hello, %s!', 'Stephen');
// 'Why hello, Foophen!'

util.format('There are %d things you have to do today', 5)
// There are 5 things you have to do today
```

### xLocale
If you pass `<LocalizationProvider xLocale />` this short circuits
`localize()` calls to always return `XXXXXX`. This can be useful
for viewing your UI and identifying which parts of the application
are not using localization.

### debug
Utilizing `<LocalizationProvider debug />` expands the `localize()`
function to include a `console.warn` messages when a key cannot be
found or when key/messages are not provided to the function when
invoked.
