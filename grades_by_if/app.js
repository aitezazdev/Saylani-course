var userInput = +prompt("Enter Your Marks : ");

if (userInput >= 90){
    console.log("Your grade is A+ and grade point is 4.0");
}
else if(userInput >= 85 && userInput <= 89){
    console.log("Your grade is A and your grade point is 4.0");
}
else if(userInput >= 80 && userInput <= 84){
    console.log("Your grade is A- and grade point is 3.8");
}
else if(userInput >= 75 && userInput <= 79){
    console.log("Your grade is B+ and grade point is 3.4");
}
else if(userInput >= 71 && userInput <= 74){
    console.log("Your grade is B and grade point is 3");
}
else if(userInput >= 68 && userInput <= 70){
    console.log("Your grade is B- and grade point is 2.8");
}
else if(userInput >= 64 && userInput <= 67){
    console.log("Your grade is C+ and grade point is 2.4");
}
else if(userInput >= 61 && userInput <= 63){
    console.log("Your grade is C and grade point is 2");
}
else if(userInput >= 57 && userInput <= 60){
    console.log("Your grade is C- and grade point is 1.8");
}
else if(userInput >= 53 && userInput <= 56){
    console.log("Your grade is D+ and grade point is 1.4");
}
else if(userInput >= 50 && userInput <= 52){
    console.log("Your grade is D and grade point is 1");
}else{
    console.log("Your grade is fail and grade point is 0.0");
}