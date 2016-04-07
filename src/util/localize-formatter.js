import get from 'lodash/get';
import util from 'util';

export default function(messages, key, values, defaultValue) {
  const string = get(messages, key, defaultValue || key);

  if (values && string) {
    return util.format(string, ...values);
  }

  return string;
}
