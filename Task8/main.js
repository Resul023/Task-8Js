//Task 1
// const myArray = [5, 8, 3, 1, 6, 0.5];
// function getMin(myArray) {
//   let min;
//   for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray.length; j++) {
//       if (myArray[i] > myArray[j]) {
//         myArray[i] = myArray[j];
//         min = myArray[i];
//       }
//     }
//     break;
//   }
//   return min;
// }
// console.log(getMin(myArray));

//Task 2
// const myArray = [5, 8, 28, 1, 6, 15];
// function getMax(myArray) {
//   let max;
//   for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray.length; j++) {
//       if (myArray[i] < myArray[j]) {
//         myArray[i] = myArray[j];
//         max = myArray[i];
//       }
//     }
//     break;
//   }
//   return max;
// }
// console.log(getMax(myArray));

//Task3
// const myArray = [5, 15, 3, 1, 0.2, 6, 5];
// function getMin(myArray) {
//   let minIndex;
//   for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray.length; j++) {
//       if (myArray[i] > myArray[j]) {
//         i = j;
//         minIndex = j;
//       }
//     }
//     break;
//   }
//   return minIndex;
// }
// console.log(getMin(myArray));

//Task4
// const myArray = [5, 3, 1, 85, 6, 5, 95];
// function getMax(myArray) {
//   let maxIndex;
//   for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray.length; j++) {
//       if (myArray[i] < myArray[j]) {
//         i = j;
//         maxIndex = j;
//       }
//     }
//     break;
//   }
//   return maxIndex;
// }
// console.log(getMax(myArray));

// Task5
// const myArray = [5, 3, 1, 13, 6, 5];
// console.log(
//   myArray.filter((ele, i, arr) => i % 2 != 0).reduce((cur, acc) => (cur += acc))
// );

// Task6
// const myArray = [5, 3, 1, 13, 6, 8, 9];
// let temp;
// function getReverseForOdd(myArray) {
//   for (let i = 0; i < myArray.length / 2; i++) {
//     temp = myArray[i];
//     myArray[i] = myArray[myArray.length - (i + 1)];
//     myArray[myArray.length - (i + 1)] = temp;
//   }
// }
// function getReverseForEven(myArray) {
//   let iterationCount = myArray.length - 1;
//   for (let i = 0; i < iterationCount / 2; i++) {
//     temp = myArray[i];
//     myArray[i] = myArray[myArray.length - (i + 1)];
//     myArray[myArray.length - (i + 1)] = temp;
//   }
// }
// if (myArray.length % 2 == 0) {
//   getReverseForOdd(myArray);
// } else {
//   getReverseForEven(myArray);
// }
// console.log(myArray);

// Task7
// const myArray = [5, 3, 1, 13, 6, 8, 9];
// console.log(myArray.filter((x) => x % 2 != 0).reduce((cur, acc) => cur++));

//Task8
// const myArray = [5, 3, 1, 9, 10, 13, 5];
// let temp;
// if (myArray.length % 2 == 0) {
//   for (let i = 0; i < myArray.length / 2; i++) {
//     temp = myArray[i];
//     myArray[i] = myArray[myArray.length / 2 + i];
//     myArray[myArray.length / 2 + i] = temp;
//   }
// } else {
//   let iterationCount = myArray.length - 1;
//   let arraySecondHalf = myArray.length + 1;
//   for (let i = 0; i < iterationCount / 2; i++) {
//     temp = myArray[i];

//     myArray[i] = myArray[arraySecondHalf / 2 + i];
//     myArray[arraySecondHalf / 2 + i] = temp;
//   }
// }

// console.log(myArray);

//Task9
// const myArray = [5, 3, 1, 13, 6, 8, 9];
// let temp;
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < myArray.length; j++) {
//     if (myArray[i] < myArray[j]) {
//       temp = myArray[i];
//       myArray[i] = myArray[j];
//       myArray[j] = temp;
//     }
//   }
// }
// console.log(myArray);

// Task10;
// const myArray = [5, 3, 1, 13, 6, 8, 9];
// for (let i = 1; i < myArray.length; i++) {
//   let current = myArray[i];
//   let j = i - 1;
//   while (j > -1 && current > myArray[j]) {
//     myArray[j + 1] = myArray[j];
//     j--;
//   }
//   myArray[j + 1] = current;
// }
// console.log(myArray);
