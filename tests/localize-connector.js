import Chai from 'chai';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
const { expect } = Chai;

import localizationConnector from '../src/LocalizationConnector.jsx';
import Localization from '../src/Localization.jsx';

describe('Localize Context Value', () => {
  const BasicElement = props => <p>
    <span>{props.localize('foo')}</span>
    <span>{props.count}</span>
  </p>;

  it('properly passes the context method via props', () => {
    const messages = { foo: 'bar' };
    const Wrapped = localizationConnector(BasicElement);
    const wrappedOutput = ReactDOMServer.renderToString(
      <Localization messages={messages}>
        <Wrapped count={4} />
      </Localization>
    );

    expect(wrappedOutput).to.include('bar'); // ensures localize provided is using correct bundle
    expect(wrappedOutput).to.include('>4<'); // ensures props flow to intended component
    expect(wrappedOutput).to.not.include('default localize for foo'); // ensures defaultProps.localize() value is not used
    expect(Wrapped.displayName).to.equal('ReactLocalized(BasicElement)');

    // tests cases when context is not provided by <Localization/>
    const unwrappedOutput = ReactDOMServer.renderToString(<Wrapped count={4} />);
    expect(unwrappedOutput).to.not.include('bar');
    expect(wrappedOutput).to.include('>4<'); // ensures props still flow to intended component
    expect(unwrappedOutput).to.include('foo'); // ensures that the key passed to localize() is returned
  });
});
