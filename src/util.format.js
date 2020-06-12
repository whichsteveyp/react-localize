// I used to use `util.format()` which was massive, then I switched to
// format-util, although when using rollup I discovered that the index.js
// just exported `require('util').format`, and then had the below contents
// in another file. at any rate all I want is this function:

function format(fmt) {
  fmt = String(fmt); // this is closer to util.format() behavior
  var re = /(%?)(%([jds]))/g
    , args = Array.prototype.slice.call(arguments, 1);
  if(args.length) {
    if(Array.isArray(args[0]))
        args = args[0];
    fmt = fmt.replace(re, function(match, escaped, ptn, flag) {
      var arg = args.shift();
      switch(flag) {
        case 's':
          arg = '' + arg;
          break;
        case 'd':
          arg = Number(arg);
          break;
        case 'j':
          arg = JSON.stringify(arg);
          break;
      }
      if(!escaped) {
        return arg;
      }
      args.unshift(arg);
      return match;
    })
  }

  // arguments remain after formatting
  if(args.length) {
    fmt += ' ' + args.join(' ');
  }

  // update escaped %% values
  fmt = fmt.replace(/%{2,2}/g, '%');

  return '' + fmt;
}

export default format;
