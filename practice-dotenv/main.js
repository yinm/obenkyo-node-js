require('dotenv').config();

console.log(process.env.HOST);
console.log(process.env.USER); // process.envにすでに同じ名前があると、そちらが優先されるっぽい (dotenvの設定は無視される)
console.log(process.env.PASS);
console.log(process.env.KOREARE);
console.log(process.env.NOT_EXIST_VARIABLE); // 存在しなければ、undefined