// let numbers = 100;

// for (let i = 1; i < numbers; i++) {
//     if ((i % 3 == 0) && (i % 5 == 0)){
//         console.log("Buzz");
//     } else if (i % 5 == 0){
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 == 0){
//         console.log("FizzBuzz");
//     }else
//     console.log(i);
// }


// let stars = "";
// for (let i = 1; i <= 5; i++){
//     stars = "";
//     for (let j = 1; j <= i; j++){
//         stars += "* ";
//     }
//     console.log(stars);
// }

// let string = "Javascript";
// let reverse = "";
// for(let i = string.length - 1; i >= 0; i--){
//     reverse += string[i];
// }
// console.log(reverse);

// let nbr = "";
// for (let i = 1; i <= 5; i++){
//     nbr = "";
//     for(let j = 1; j <= i; j++){
//         nbr += i + " ";
//     }
//     console.log(nbr);
// }

// let stars = "";
// for (let i = 1; i <= 5; i++){
//     stars = "";
//     for (let k = 5 - i; k > 0; k--) {
//         stars += " ";
//     }
//     for(let j = 1; j <= i; j++){
//         stars += "*";
//     }
//     console.log(stars);
// }

let stars = "";
for (let i = 1; i <= 5; i++){
    stars = "";
    for (let k = 5 - i; k > 0; k--) {
        stars += " ";
    }
    for(let j = 1; j <= i; j++){
        stars += "* ";
    }
    console.log(stars);
}