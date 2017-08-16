const moment = require('moment');

const before = moment('2017-08-16');
const same = moment('2017-08-16');
const designation = moment('2017-08-16T05:57:32Z');
const after = moment('2017-08-17');

if (designation.isBefore(after)) {
  console.log('before');
} else {
  console.log('after');
}

if (designation.isAfter(same)) {
  console.log('after');
} else {
  console.log('before');
}
