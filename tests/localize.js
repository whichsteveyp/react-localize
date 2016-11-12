import Chai from 'chai';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
const { expect} = Chai;

import Localization from '../src/Localization.jsx';
import Text from '../src/Text.jsx';

describe('Localize Context Value', () => {

  const BasicElement = React.createClass({
    contextTypes: {
      localize: React.PropTypes.func
    },

    render() {
      const { localize } = this.context;
      const { customMessage, values } = this.props;
      return <span>{localize(customMessage, values)}</span>
    }
  })

  it('renders out a standard message', () => {
    const messages = {
      'this.is.a.message': "This is some cool message"
    };

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages}>
        <BasicElement customMessage='this.is.a.message'/>
      </Localization>
    );

    expect(output).to.include('>This is some cool message<');
  });

  it('renders out an interpolated message', () => {
    const messages = {
      'this.is.interpolated': '%s rules everything around me'
    };

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages}>
        <BasicElement customMessage='this.is.interpolated' values={['Cash']}/>
      </Localization>
    );

    expect(output).to.include('>Cash rules everything around me<');
  });

  it('appends extra values to the end when rendering out an interpolated message', () => {
    const messages = {
      'this.is.interpolated': '%s rules everything around me'
    };

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages}>
        <BasicElement customMessage='this.is.interpolated' values={['Cash', 'Life']}/>
      </Localization>
    );

    expect(output).to.include('>Cash rules everything around me Life<');
  });

  it('renders out the original message if no translated key is found', () => {
    const messages = {};

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages}>
        <BasicElement customMessage='give me a string'/>
      </Localization>
    );

    expect(output).to.include('>give me a string<');
  });

  it('ignores provided values if no translated key is found', () => {
    const messages = {};

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages}>
        <BasicElement customMessage='give me a string by itself' values={[1,2,3]}/>
      </Localization>
    );

    expect(output).to.include('>give me a string by itself<');
  });

  it('ignores provided values if is null', () => {
    const messages = {
      'thisMessage': 'thatMessage'
    };

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages}>
        <BasicElement customMessage='thisMessage' values={null}/>
      </Localization>
    );

    expect(output).to.include('>thatMessage<');
  });

  it('adds a data key when localize is in debug mode', () => {
    const messages = {
      'this.is.a.message': "This is some cool message"
    };

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages} xLocale={true}>
        <BasicElement customMessage='this.is.a.message'/>
      </Localization>
    );

    expect(output).to.include('>XXXXXX<');
  });
});
