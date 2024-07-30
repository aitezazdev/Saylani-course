// var cities = ["Peshawar", "Karachi", "Lahore", "Quetta", "Islamabad"];

// for (var i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }

// Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10 to the console.
// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Question 2: Write a for loop in JavaScript that prints the even numbers from 2 to 20 to the console.
// for (var i = 0; i <= 20; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// Question 3: Write a for loop in JavaScript that prints the numbers from 10 to 1 in descending order to the console.
// for (var i = 10; i > 0; i--){
//     console.log(i);
// }

// Question 4: Write a for loop in JavaScript that prints the squares of the numbers from 1 to 10 to the console.
// for (var i = 1; i <= 10; i++){
//     console.log(i * i);
// }

// Question 5: Write a for loop in JavaScript that iterates over the elements of an array and prints each element to the console. Use the array let arr = [1, 2, 3, 4, 5].
// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// Question 6: Write a for loop in JavaScript that iterates over the elements of an array and prints only the elements that are greater than 3. Use the array let arr = [1, 2, 3, 4, 5].
// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++){
//     if (arr[i] > 3){
//         console.log(arr[i]);
//     }
// }

// Question 7: Write a for loop in JavaScript that calculates and prints the sum of all elements in an array. Use the array let arr = [1, 2, 3, 4, 5].
// var arr = [1, 2, 3, 4, 5];
// var sum = 0;
// for (var i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

// Question 8: Write a for loop in JavaScript that concatenates all elements of an array into a single string. Use the array let arr = ['a', 'b', 'c', 'd'].
// var arr = ['a', 'b', 'c', 'd'];
// var concat = "";
// for (var i = 0; i < arr.length; i++){
//     concat += arr[i];
// }
// console.log(concat);

// Question 9: Write a for loop in JavaScript that iterates over a nested array and prints each element. Use the array let nestedArr = [[1, 2], [3, 4], [5, 6]].
// var nestedArr = [[1, 2], [3, 4], [5, 6]];
// for (var i = 0; i < nestedArr.length; i++){
//     for (var j = 0; j < nestedArr[i].length; j++){
//         console.log(nestedArr[i][j]);
//     }
// }

// uestion 10: Write a nested for loop in JavaScript that calculates the sum of all elements in a 2D array. Use the array let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]].
// var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// var sum = 0;
// for (var i = 0; i < matrix.length; i++){
//     for(var j = 0; j < matrix[i].length; j++){
//         sum += matrix[i][j];
//     }
// }
// console.log(sum);

// Now Patterns

// var star = "";
// var rows = 5;
// for (var i = 0; i <= rows; i++){
//     star = "";
//     for (var j = 0; j <= i; j++){
//         star += "* ";
//     }
//     console.log(star);
// }

// var nbrs = "";
// var rows = 5;
// for(var i = 1; i <= rows; i++){
//     nbrs = "";
//     for(var j = 1; j <= i; j++){
//         nbrs += j + " ";
//     }
//     console.log(nbrs);
// }

// var star = "";
// var rows = 5;
// for (var i = rows; i >= 1; i--){
//     star = "";
//     for (var j = 1; j <= i; j++){
//         star += "* ";
//     }
//     console.log(star);
// }

// var rows = 5;
// var star = "";
// for (var i = 1; i <= rows; i++) {
//   star = "";
//   for (var j = rows; j > i; j--) {
//     star += " ";
//   }
//   for (var k = 1; k <= i; k++) {
//     star += "* ";
//   }
//   console.log(star);
// }

// var rows = 5;
// var star = "";
// for (var i = rows; i >= 1; i--) {
//   star = "";
//   for (var j = rows; j > i; j--) {
//     star += " ";
//   }
//   for (var k = 1; k <= i; k++) {
//     star += "* ";
//   }
//   console.log(star);
// }

// var rows = 5;
// var star = "";
// for (var i = 1; i <= rows; i++) {
//   star = "";
//   for (var j = rows; j > i; j--) {
//     star += " ";
//   }
//   for (var k = 1; k <= i; k++) {
//     star += "* ";
//   }
//   console.log(star);
// }

// for (var i = rows - 1; i >= 1; i--) {
//   star = "";
//   for (var j = rows - 1; j >= i; j--) {
//     star += " ";
//   }
//   for (var k = 1; k <= i; k++) {
//     star += "* ";
//   }
//   console.log(star);
// }

// var count = 1;
// var rows = 5;
// var print = "";
// for (var i = 1; i <= rows; i++){
//     print = "";
//     for (var j = 1; j <= i; j++){
//         print += count + " ";
//         count++;
//     }
//     console.log(print);
// }

var rows = 5;
var print = "";
for (var i = 1; i <= rows; i++) {
  print = "";
  for (var j = rows; j > i; j--) {
    print += " ";
  }
  for (var k = 1; k <= i; k++) {
    print += k + " ";
  }
  console.log(print);
}