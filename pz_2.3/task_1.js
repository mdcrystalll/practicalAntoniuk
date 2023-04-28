
const isOdd = require('is-odd');

const num = 5;
if (isOdd(num)) {
  console.log(`${num} є непарним числом`);
} else {
  console.log(`${num} є парним числом`);
}