# react-localize
A simple context wrapper and text localization component for localizing strings.

I'm releasing this a bit early, in terms of 'production ready best component' but I know that if I wait to do that it'll be yet-another-not-released thing I work on. I'd love to collaborate on making it better too - open an issue or send a PR if you'd like. A good place to start would be the [TODO.md](https://github.com/sprjr/react-localize/blob/master/TODO.md)

### You probably know this part:
`npm i react-localize`


## You can use it like this:

### Default, simplest use with the built in helpers:
```
import Localization, { Text } from 'react-localize';

<Localization messages={{
  'app.button.Submit': 'Submit',
  foo: {
    bar: 'Hey %s, you must be %d old?'
  }
}}>
  <AnyParent>
    <Text message="prop.Val" style={{ color: 'blue' }} />
    <Text message="app.button.Submit" data-magic="pretty neat" />
    <Text message="foo.bar" values={['Foophen', 32]} style={{ color: 'red' }} />
  </AnyParent>
</Localization>

// outputs (respectively):
// <span style="color: blue">prop.Val</span>
// <span data-magic="pretty neat">Submit</span>
// <span style="color: red">Hey Foophen, you must be 32 old?</span>
```
(this is great for really simple uses, like buttons or simple UI-text)


### Also you can defer rendering for custom output:
```
<Text message='some.key'>
{(localized, message, ...values) => {
  // message & ...values are optional, and are really just whatever you sent in on props

  return <input type="text" placholder={localized} />
}}
</Text>

// outputs (perhaps obviously?)
// <input type="text" placholder={localized} />
```
(that's so you can use something other than span, or put localized text in attributes, mostly)


### Also you don't have to use the `<Text />` helper either:
```
// app.js
<Localization messages={myBundle}>
  <YourComponent />
</Localization>

// YourComponent.jsx
import TabsMaybe from 'react-bootstrap-tabs-i-guess';

export default YourComponent = (props, context) => {
  const tabsConfig = props.tabsArray.map((tab) => {
    return {
      id: tab.id,
      message: context.localize(tab.label)
      onClick: () => props.onTabClick(tab.id)
    };
  });

  return <TabsMaybe tabs={tabConfig} />
};
```
(in the event you need to localize something that doesn't go directly in to a JSX ouput or needs done before handing to some other component to handle.)

## How does it work?
`<Localization />` exposes a `localize(key, ...values)` function that is passed through [ReactJS Context](https://facebook.github.io/react/docs/context.html) to all children in the render tree it wraps. It takes a `messages` property that should be formatted like `{ 'mykey.path.to.Value': 'Value' }` or `{ myKey: { path: { to: { Value: 'Value' } } } }`.

By default, under the hood `localize` simply tries to look things up using `lodash/get`, and will either return the value found there **or** the original `key` that you pass it as a fallback.

Additionally, you can pass in values to have them `printf` formatted against the string that it does find. You can read more about how that works on [util.format](https://nodejs.org/api/util.html#util_util_format_format) as well. Here's some quick examples:

```
util.format('Why hello, %s!', 'Foophen');
// 'Why hello, Foophen!'

util.format('There are %d things you have to do today', 5)
// There are 5 things you have to do today
```

This format is not universal, some message bundles use things like `Welcome {0} to our {1} website}` and simply pass arguments in order. In the future we should probably let you pass in some custom parsing functions to work with different data structures and formatting. It's on the TODO!

The `<Text />` component is just a wrapper intended to help you out when you don't need or want to wire your component up to `contextTypes` and process things yourself. All it's really doing it helping you call `localize(key, ...values)`. By default it returns a span with all the other props you pass this component. If you give it a `function` in the children portion, it will instead invoke that function sort of like: `providedRender(localized, key, ...values)` so you can decide how to render things out.

## More Stuff
I think you might need to browserify `build/index.js` because of `util` dependency. I have the `dist/` folder but I'm not sure how I feel about all that or what it should do yet.

`¯\_(ツ)_/¯`
