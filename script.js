// Task 1

function testThrow(excemtion) {
  try {
    throw excemtion;
  } catch (error) {
    console.log("Caught:" + error);
  }
}
testThrow(5);
testThrow(new Error("An error happened"));

// Task 2

/*function calcRectangleArea(heigth, width) {
  try {
    var area = width * heigth;
    area = JSON.parse(area);
    console.log("The area of Rectangle is :", area);
  } catch (excemtion) {
    console.log("Error: Inccorect inpute data");
  }
}
calcRectangleArea(5, 8);*/

function calcRectangleArea(width, heigth) {
  try {
    var area = width * heigth;
    if (isNaN(area)) throw "Error: Incorrect Data";
    console.log("The area of Rectangle is :", area);
  } catch (error) {
    console.log(error);
  }
}
calcRectangleArea(5, 8);

// Task 3

function checkAge(age) {
  var age = prompt("Pleas enter your age", "Age");
  try {
    if (age == "") throw "The field is empty! Plis enter your age!";
    if (isNaN(age)) throw "Error: data is not a number!";
    if (age < 14) throw "You must be older then 14!";
    console.log("Yuo can whoch this film!");
  } catch (excemtion) {
    console.log(excemtion);
  }
}
checkAge();

// Task 4

class MonthException {
  constructor(mesage) {
    this.name = "MonthException";
    this.mesage = mesage;
  }
}
var obj = new MonthException("Incorrect month number");
//console.log(Object.values(x));

function showMonthName(month) {
  try {
    if (month < 1 || month > 12)
      throw obj.name.toString() + " " + obj.mesage.toString();
    if (month == 1) return "January";
    if (month == 2) return "February";
    if (month == 3) return "March";
    if (month == 4) return "Aprile";
    if (month == 5) return "May";
    if (month == 6) return "June";
    if (month == 7) return "July";
    if (month == 8) return "August";
    if (month == 9) return "September";
    if (month == 10) return "October";
    if (month == 11) return "Novembr";
    if (month == 12) return "December";
  } catch (excemtion) {
    console.log(excemtion);
  }
}
console.log(showMonthName(14));
