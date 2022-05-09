const writeAndModify = require('./server.js');
const validator = require('validator');

writeAndModify();

console.log(validator.isEmail('naana@gmail.com'));
console.log(validator.isEmail('nana@test'));