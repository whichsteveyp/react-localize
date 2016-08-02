import Chai from 'chai';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
const { expect} = Chai;

import Localization from '../src/Localization.jsx';
import Text from '../src/Text.jsx';

describe('Text JSX Component', () => {
  it('renders out a standard message', () => {
    const messages = {
      'this.is.a.message': "This is some cool message"
    };

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages}>
        <Text message='this.is.a.message'/>
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
        <Text message='this.is.interpolated' values={['Cash']}/>
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
        <Text message='this.is.interpolated' values={['Cash', 'Life']}/>
      </Localization>
    );

    expect(output).to.include('>Cash rules everything around me Life<');
  });

  it('renders out the original message if no translated key is found', () => {
    const messages = {};

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages}>
        <Text message='give me a string'/>
      </Localization>
    );

    expect(output).to.include('>give me a string<');
  });

  it('ignores provided values if no translated key is found', () => {
    const messages = {};

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages}>
        <Text message='give me a string by itself' values={[1,2,3]}/>
      </Localization>
    );

    expect(output).to.include('>give me a string by itself<');
  });

  it('adds a data key when localize is in debug mode', () => {
    const messages = {
      'this.is.a.message': "This is some cool message"
    };

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages} debug={true}>
        <Text message='this.is.a.message'/>
      </Localization>
    );

    expect(output).to.include('data-original-message="this.is.a.message"');
  });

  it('adds a data key when localize is in debug mode', () => {
    const messages = {
      'this.is.a.message': "This is some cool message"
    };

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages} xLocale={true}>
        <Text message='this.is.a.message'/>
      </Localization>
    );

    expect(output).to.include('>XXXXXX<');
  });

  it('allows you to override the localizer function', () => {
    const messages = {
      'this.is.a.message': "stripthis|This is some cool message"
    };

    const stripPipes = (message) => {
      const splitMessage = message.split('|')

      if(splitMessage.length === 0){
        return splitMessage[0]
      } else {
        return splitMessage.slice(1).join('')
      }
    };

    let output = ReactDOMServer.renderToString(
      <Localization messages={messages} localize={stripPipes}>
        <Text message='this.is.a.message'/>
      </Localization>
    );

    expect(output).to.include('>This is some cool message<');
  });
})
