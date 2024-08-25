// function square(num){
//     return num * num;
// }
// console.log(square(3));

// 2.
// var count = 10;
// function scope(){
//     var count = 3;
//     return count * 2;
// }
// console.log(scope());
// console.log(count);


// 3.
// var total = 50;
// function addToTotal(num){
//     total = total + num;
//     return total;
// }
// console.log(addToTotal(30));


// // 4.
// function greetUser(name){
//     return `Hello ${name}`;
// }
// console.log(greetUser("Ali"));

// 5.
var status = "inactive";
function activate(){
    status = "active";
    console.log(status);
    
}
activate();
console.log(status);