let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr.sort((a, b) => {
  return a > b ? -1 : 1;
});
console.log(newArr);

let arr1 = ["b", "a", "d", "c"];
let newArr1 = arr1.sort((a, b) => {
    return  a > b ? -1 : 1
})
console.log(newArr1);