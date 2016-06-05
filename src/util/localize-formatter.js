import get from 'lodash.get';
import util from 'util';

export default function(message, key, values) {
  if (message) {
    return util.format(message, ...values);
  }

  return key;
}
