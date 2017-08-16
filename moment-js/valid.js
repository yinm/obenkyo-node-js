const moment = require('moment');

const m = moment('2011-10-10T10:20:90');
console.log(m.isValid());
console.log(m.invalidAt());
