// problem 1
// var sentence = "The quick brown fox jumps over a lazy dog.";
// var word = "fox";
// isWordFound = sentence.indexOf(word)
// if(isWordFound == -1){
//     console.log("not Found");
// }else{
//     console.log("Word found");
// }


// Problem 2
// var sentence = "Hello world welcome to the world of programming";
// var word = "world";
// var segmentCount = 0;
// var splitted = sentence.split(" ");
// for(var i = 0; i < splitted.length; i++){
//     if(splitted[i] === word){
//         segmentCount++;
//     }
// }
// console.log(`world count is ${segmentCount}`);


//Problem 3
// var text = "Javascript";
// var charAtIndex = 4;
// var char = text.charAt(charAtIndex);
// if(charAtIndex < text.length){
//     console.log(`char at index ${charAtIndex} is ${char}`);
// }else{
//     console.log("not found");
// }


//Problem 4
// var string = "banana";
// var character = "a";
// var charIndices = [];
// for (var i = 0; i < string.length; i++) {
//     if (string.charAt(i) === character) {
//         charIndices.push(i);
//     }
// }
// console.log(charIndices);


// Problem 5
// var string = "Mississippi";
// var newChar = "z";
// var newText = string.replace(/s/g, newChar);
// console.table([string, newText])