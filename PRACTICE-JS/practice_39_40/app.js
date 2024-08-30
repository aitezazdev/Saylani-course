// 1.
function getGrade(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      return "A";
    case score >= 80 && score <= 89:
      return "B";
    case score >= 70 && score <= 79:
      return "C";
    case score >= 60 && score <= 69:
      return "D";
    case score >= 50 && score <= 59:
      return "E";
    default:
      return "Invalid score";
  }
}
console.log(getGrade(56));

// 2.
function colorTraffic(color) {
  switch (color) {
    case "red":
      return "Stop";
    case "yellow":
      return "Prepare To Stop";
    case "green":
      return "Go";
    default:
      return "Invalid color";
  }
}
console.log(colorTraffic("red"));

// 3.
function fruitName(fruit) {
  switch (fruit) {
    case "apple":
      return "Per kg 200";
    case "banana":
      return "Per kg 300";
    case "orange":
      return "Per kg 400";
    case "grape":
      return "Per kg 500";
    default:
      return "invalid fruit name";
  }
}
console.log(fruitName("orange"));

// 4.
function vehicleCode(code) {
  switch (code) {
    case "C":
      return "Car";
    case "M":
      return "Motorcycle";
    case "T":
      return "Truck";
    default:
      return "invalid vehicle name";
  }
}
console.log(vehicleCode("M"));
