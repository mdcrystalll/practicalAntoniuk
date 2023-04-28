//create array
const N = 10;//count elements
const arr = []; //create empty array

for (let i = 0; i < N; i++){
 arr.push(Math.floor(Math.random() * 100))
}

console.log("Array:", arr);

const max = Math.max (...arr);
const min = Math.min (...arr);
const sum = arr.reduce((acc, cur) => acc + cur, 0);
const avg = sum / N;

console.log("Max:", max);
console.log("Min:", min);
console.log("All sum:", sum);
console.log("Avg:", avg);

const oddNumbers = arr.filter(num => num & 2 !== 0);

console.log("Neparni znach:", oddNumbers);