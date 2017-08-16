const moment = require('moment');

const m = moment('2011-10-10T10:20:90');
console.log(m.isValid());
console.log(m.invalidAt());

const validMoment = moment('2017-08-16');
console.log(validMoment.isValid());

console.log(moment('test').isValid());
