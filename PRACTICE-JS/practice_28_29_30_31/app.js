// 1.
console.log(parseInt("123abc"));

// 2.
console.log(parseFloat("45.67xyz"));

// 3.
console.log(Number(123.45));

// 4.
console.log((789).toString());

// 5.
console.log(parseInt("256px").toString());

// 1.
console.log((123.456789).toFixed(2));

// 2.
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log(`${year}-${month}-${day}`);

// 3.
var today = new Date();
var nextBirthday = new Date("2025-04-30");
var timeDiff = nextBirthday.getTime() - today.getTime();
var daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
console.log({daysLeft});

// 4.
var today = new Date().toDateString();
var time1 = new Date(today + " 14:35");
var time2 = new Date(today + " 18:45");
var timeDiff = time2.getTime() - time1.getTime();
var minutes = Math.ceil(timeDiff / (1000 * 60));
console.log({minutes});

// 5.
var amount = 1234.567;
console.log(`$${amount.toFixed(2)}`);