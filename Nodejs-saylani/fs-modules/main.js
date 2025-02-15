// const { log } = require('console');
const fs = require('fs');

console.log("starting the app");

// fs.writeFileSync("hello.txt", "hello zaz");
// log("file created successfully");

// fs.writeFile("hello.txt", "hello bro", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     log("file created successfully");
// })


// fs.readFile("hello.txt", "utf8", (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("file content: ", data);
// })


// fs.appendFileSync("hello.txt", " welcome to hell");
// log("file content updated successfully");


// fs.unlink("hello.txt", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     log("file deleted successfully");
// });


// if(fs.existsSync("hello.txt")) {
//     console.log("file exists");
// } else {
//     console.log("file does not exist");
// }


// fs.mkdir("myFolder", err => {
//     if (err) {
//         console.log(err);
//     }
//     log("folder created successfully");
// })


// fs.mkdir("myFolder/index.js", err => {
//     if (err) {
//         console.log(err);
//     }
//     log("folder created successfully");
// })


// fs.mkdir("myFolder/subFolder", err => {
//     if (err) {
//         console.log(err);
//     }
//     log("folder created successfully");
// })


// fs.writeFile("myFolder/index.js", "dummy file", err => {
//     if (err) {
//         console.log(err);
//     }
//     log("file created successfully");
// })


function addLogs(message, userName, id) {
    const logFormat = `${new Date().toISOString()} - ${userName} - userID -> ${id} - ${message}\n`;
    fs.appendFile("logs.txt", logFormat, err => {
        if (err) {
            console.log(err);
        }
        log("log added successfully");
    })
}

addLogs("User logout", "zaz", 18);


console.log("ending the app");