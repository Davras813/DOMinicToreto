// let array=[89, 23, 24, 45, 46, -23, -45, -2, -2];

// console.log(array.sort());

let array = [89, 23, 24, 45, 46, -23, -45,-2,-2];
let temp;

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++)
    if (array[i] > array[j]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

console.log({array})
