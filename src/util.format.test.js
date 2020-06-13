import '@testing-library/jest-dom/extend-expect';
import format from './util.format';

test('formats a string properly when no values are provided', () => {
  const formatted = format('Hello, %s');
  expect(formatted).toBe('Hello, %s');
});

test('formats a string properly when values are provided', () => {
  const formatted = format('Hello, %s', ['Stephen']);
  expect(formatted).toBe('Hello, Stephen');

  const numberFormatted = format('%d items in cart', [5]);
  expect(numberFormatted).toBe('5 items in cart');

  const jsonFormatted = format('Source Codez: %j', [ [{ source: 'code' }] ]);
  expect(jsonFormatted).toBe('Source Codez: [{\"source\":\"code\"}]');
});

test('also works with multiple values', () => {
  const formatted = format('Hello, %s %s', ['Stephen', 'Myers']);
  expect(formatted).toBe('Hello, Stephen Myers');

  const numberFormatted = format('%d of %d items in cart', [5, 10]);
  expect(numberFormatted).toBe('5 of 10 items in cart');

  const jsonFormatted = format('Source Codez: %j %j', [ [{ source: 'code' }], { id: 'object identifier' } ]);
  expect(jsonFormatted).toBe('Source Codez: [{\"source\":\"code\"}] {\"id\":\"object identifier\"}');
});

test('does not explode when a message is missing', () => {
  const formatted = format(undefined, ['Stephen']);
  expect(formatted).toBe('undefined Stephen');
});
