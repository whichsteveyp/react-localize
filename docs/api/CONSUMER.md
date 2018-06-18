The `<LocalizationConsumer/>` component of this library is quite
straightforward. It accepts only 1 prop, `children`, and it will
invoke that provided function any time it renders.

```jsx
<LocalizationConsumer>
  {({ localize }) => {
    // you can return any valid React return value here

    // `localize` is a function that has context to the
    // `messages` object in it's nearest provider
    // and can be used to obtain format strings based on
    // two arguments:

    return <div>
      <p>{localize('key', ['values'])}</p>
    </div>;
  }}
</LocalizationConsumer>
```

The main benefit of this library comes from this component,
as any time the app, or more specifically, the provider, re-
renders this will ensure that the children & grandchildren nodes
will re-render as well with updated localization values.

If your app doesn't benefit from retrieving a new bundle based
on a language/locale change (e.g. a user toggles from English
to French) or you don't need to update the change without
refreshing the page you can consider using a singleton library
with a simple `getMessage()` function.
