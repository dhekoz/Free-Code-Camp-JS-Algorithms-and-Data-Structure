//.................................Store Multiple Values in one Variable using JavaScript Arrays.................................//

const myArray = ["shoes", 2];
console.log(myArray);

//..................................Nest one Array within Another Array.........................................................//
const myNewArray = [
  ["Shoes", 10],
  ["Sandals", 20],
];
console.log(myNewArray);

//..................................Access Array Data with Indexes..............................................................//
const myArr = [50, 60, 70];
const myData = myArr[0];
console.log(myData);

//.................................Modify Array Data With Indexes.............................................................//
const myArr2 = [64, 89, 100];
myArr2[0] = 13;
console.log(myArr2);

//.............................Access Multi-Dimensional Arrays With Indexes..................................................//
const myArr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData2 = myArr3[2][1];
console.log(myData2);
