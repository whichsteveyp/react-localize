# react-localize
A simple context wrapper and text localization component for localizing strings.

## You know this part:
`npm i react-localize`


## You can use it like this:
```
import Localization, { Text } from 'react-localize';

<Localization messageBundle={{
  'app.button.Submit': 'Submit',
  'foo.bar': 'Hey %s, you must be %d old?'
}}>
  <AnyParent>
    <Text message="prop.Val" style={{ color: 'blue' }} />
    <Text message="app.button.Submit" />
    <Text message="foo.bar" values={['Foophen', 32]} style={{ color: 'red' }} />
  </AnyParent>
</Localization>
```

## You can expect the above to output: (respectively)
```
<span style="color: blue">prop.Val</span>
<span>Submit</span>
<span style="color: red">Hey Foophen, you must be 32 old?</span>
```

## More Stuff
I think you might need to browserify `build/index.js` because of `util` dependency. I have the `dist/` folder but I'm not sure how I feel about all that or what it should do yet.

`¯\_(ツ)_/¯`
