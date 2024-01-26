var a = isNaN('11');
console.log(a);

var a = isNaN(2 - 10);
console.log(a);

console.log("The isNaN function in JavaScript returns true if the value is NaN (Not a Number), and false if it's a valid number. First one- it will first convert the string to a number and then check if it's NaN. In this case, '11' can be converted to the number 11, so isNaN('11') returns false.");

var a = isNaN('A');
console.log(a);