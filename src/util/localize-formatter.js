import util from 'util';

export default (message, key, values) => {
  if (message) {
    return util.format(message, ...values);
  }

  return key;
};
