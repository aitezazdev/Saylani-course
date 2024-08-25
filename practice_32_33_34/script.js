// 1.
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
console.log({ year });
console.log({ month });
console.log({ date });
console.log({ hour });
console.log({ minute });
console.log({ second });

// 2 .
var now = new Date("July 4, 2024, 12:00");
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var hour = now.getHours();
console.log(`${year}-${month}-${date} ${hour}PM`);

// 3.
var date = new Date(2024, 6, 4, 12, 0);
date.setFullYear(2025);
date.setMonth(11);
date.setDate(25);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var date = date.getDate();
console.log(`${year}-${month}-${date}`);

// 4.
var birthday = new Date("April 30, 2002");
var day = birthday.getDay();
console.log({ day });

// 5.
var newYear = new Date("January 1, 2024 00:00:00");
var year = newYear.getFullYear();
var month = newYear.getMonth() + 1;
var day = newYear.getDate();
var hour = newYear.getHours();
var minute = newYear.getMinutes();
console.log(`${year}-${month}-${day} ${hour}:${minute}`);

// 6.
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var modifiedDate = currentDate.getDate() + 5;
currentDate.setDate(modifiedDate);
var date = currentDate.getDate();
console.log(`${year}-${month}-${date}`);