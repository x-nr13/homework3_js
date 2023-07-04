// function findMin (a, b) {
//   return Math.min (a, b);
// }

// console.log (findMin(5, 10));

//******************************//

// function printEvenNumbers (a, b) {
//   for (let i = Math.max(a, b); i >= Math.min(a, b); i--) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// printEvenNumbers (10, 3);

//******************************//

// function power (base, exponent = 2) {
//   return Math.pow (base, exponent);
// }

// console.log (power(2, 3));
// console.log (power(5));

//******************************//

// function sumNumbers (n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log (sumNumbers(5));

//******************************//

// function sumEvenAndOddNumbers (n, m) {
//   let sumEven = 0;
//   let sumOdd = 0;

//   for (let i = n; i <= m; i++) {
//     if (i % 2 === 0) {
//       sumEven += i;
//     } else {
//       sumOdd += i;
//     }
//   }

//   console.log ("Сумма четных чисел:", sumEven);
//   console.log ("Сумма нечетных чисел:", sumOdd);
// }

// sumEvenAndOddNumbers (1, 10);

//******************************//

// function findLongestElement (arr) {
//   if (arr.length === 0) {
//     return null;
//   }

//   let longestElement = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longestElement.length) {
//       longestElement = arr[i];
//     }
//   }
//   return longestElement;
// }

// console.log (findLongestElement(['one', 'two', 'three']));
