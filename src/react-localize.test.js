import React, { useContext } from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { LocalizationConsumer, LocalizationProvider, withLocalization, useLocalize } from './index';

const messages = {
  foo: 'bar',
  fooValues: 'a baz %s',
};

beforeEach(() => {
  console._old = console.warn;
  console.warn = jest.fn();
});

afterEach(() => {
  console.warn = console._old;
});

test('provides a localize function that can be used to retrieve messages in a bundle', () => {
  const { queryByText, debug } = render(<LocalizationProvider messages={messages}>
    <LocalizationConsumer>
      {({ localize }) => {
        return <div>
          <span>{localize('foo')}</span>
          <span>{localize('fooValues', ['bat'])}</span>
        </div>;
      }}
    </LocalizationConsumer>
  </LocalizationProvider>);

  expect(queryByText('bar')).not.toBeNull();
  expect(queryByText('a baz bat')).not.toBeNull();
});

test('calls a provided props.localize function with expected values', () => {
  const key = 'key';
  const values = ['values'];
  const messages = { key: 'key' };
  const xLocale = false;
  const debug = true;
  const customLocalize = jest.fn();

  render(<LocalizationProvider xLocale={xLocale} debug={debug} messages={messages} localize={customLocalize}>
    <LocalizationConsumer>
      {({ localize }) => {
        localize(key, values);
        return null;
      }}
    </LocalizationConsumer>
  </LocalizationProvider>);

  expect(customLocalize).toBeCalled();
  expect(customLocalize).toBeCalledWith(messages, key, values, xLocale, debug);
});

test('warns in debug mode by default when messages are not provided', () => {
  render(<LocalizationProvider messages={null} debug>
    <LocalizationConsumer>
      {({ localize }) => {
        localize('foo');
        return null;
      }}
    </LocalizationConsumer>
  </LocalizationProvider>);

  expect(console.warn).toBeCalled();
});

test('warns in debug mode by default when a key is not provided', () => {
  render(<LocalizationProvider messages={null} debug>
    <LocalizationConsumer>
      {({ localize }) => {
        localize();
        return null;
      }}
    </LocalizationConsumer>
  </LocalizationProvider>);

  expect(console.warn).toBeCalled();
});

test('warns in debug mode by default when a key is not found in messages', () => {
  render(<LocalizationProvider messages={messages} debug>
    <LocalizationConsumer>
      {({ localize }) => {
        localize('missssingKey');
        return null;
      }}
    </LocalizationConsumer>
  </LocalizationProvider>);

  expect(console.warn).toBeCalled();
});

test('outputs correct XXXXXX by default when xLocale is true', () => {
  const { queryByText } = render(<LocalizationProvider messages={messages} xLocale>
    <LocalizationConsumer>
      {({ localize }) => {
        return <span>{localize('foo')}</span>;
      }}
    </LocalizationConsumer>
  </LocalizationProvider>);

  expect(queryByText('XXXXXX')).toBeTruthy();
});

test('does not explode when provided props.localize is not a function', () => {
  const { queryByText } = render(<LocalizationProvider messages={messages} localize={null} debug>
    <LocalizationConsumer>
      {({ localize }) => {
        return <span>{localize('foo')}</span>;
      }}
    </LocalizationConsumer>
  </LocalizationProvider>);

  expect(queryByText('foo')).toBeTruthy();
  expect(console.warn).toBeCalledWith('Unable to localize foo, not connected to react-localize');
});

test('useLocalize hook', () => {
  // runs the test just if useContext is available otherwise expects a console.warn
  if (!useContext) {
    expect(console.warn).toBeCalledWith('This feature is only available in React >= 16.8');
    return;
  }

  const HookTester = ({hook, handleResult}) => {
    return handleResult(hook());
  }

  const { queryByText } = render(<LocalizationProvider messages={messages} localize={null} debug>
    <HookTester
      hook={useLocalize}
      handleResult={result => {
        const { localize } = result;
        return <span>{localize('foo')}</span>;
      }}
    />
  </LocalizationProvider>);
  expect(queryByText('bar')).not.toBeNull();
});
