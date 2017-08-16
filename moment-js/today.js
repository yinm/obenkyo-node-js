const moment = require('moment');

const today = moment().startOf('day');
const designation = moment('2017-08-16T05:57:32Z');

console.log(today);

if (designation.isAfter(today)) {
  console.log('after');
}
