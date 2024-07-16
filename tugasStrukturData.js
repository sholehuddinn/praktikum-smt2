// const rl = require('readline');

// const readlineInterface = rl.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input = new Promise((resolve) => {
//   readlineInterface.question("Masukkan Data: ", (input) => {
//     resolve(input);
//     readlineInterface.close();
//   });
// });

// input.then((data) => {
//   console.log("Data yang dimasukkan:", data);
// });

const dumm = [1,2,3,4,5];
console.log(...dumm);

function findSeq (data, find) {
  let res = 'Tidak Ada';
  for (let i = 0; i < data.length; i++) {
    res = (data[i] == find) ? 'Ada' : res;
  };
  console.log(`Data ${find}: ${res}`)
}

function findBin (data, find) {
  let left = 0;
  let right = data.length - 1;
  let res = 'Tidak Ada';

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); 
    res = (data[mid] === find) ? 'Ada' : res;
    left = (data[mid] < find) ? mid + 1 : left;
    right = (data[mid] > find) ? mid - 1 : right;
    if (res === 'Ada') break; 
  }
  console.log(`Data ${find}: ${res}`);
}

const data = [10, 1, 2, 11, 8, 7, 5, 4, 15, 16];
console.log(...data)

findSeq(data, 8);
findSeq(data, 9);

const data2 = [2, 5, 6, 9, 10, 12, 15, 18, 20, 22];
console.log(...data2)

findBin(data2, 8);
findBin(data2, 9);

