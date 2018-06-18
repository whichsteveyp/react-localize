import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { LocalizationConsumer, LocalizationProvider, withLocalization } from './index';

const messageBundle = {
  foo: 'bar',
  fooValues: 'a baz %s',
};

test('provides a localize function that can be used to retrieve messages in a bundle', () => {
  const { queryByText, debug } = render(<LocalizationProvider messages={messageBundle}>
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
