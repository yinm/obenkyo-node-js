const minimist = require('minimist');

const argv = minimist(process.argv.slice(2), {
  alias: {
    f: 'from',
    t: 'to'
  },
});

console.dir(argv);
