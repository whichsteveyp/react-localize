import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { LocalizationConsumer, LocalizationProvider, withLocalization } from './index';

const messages = {
  foo: 'bar',
  fooValues: 'a baz %s',
};

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
        return localize(key, values);
      }}
    </LocalizationConsumer>
  </LocalizationProvider>);

  expect(customLocalize).toBeCalled();
  expect(customLocalize).toBeCalledWith(messages, key, values, xLocale, debug);
});
