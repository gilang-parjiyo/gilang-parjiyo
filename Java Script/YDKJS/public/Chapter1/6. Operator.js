// 1. Assignment
var a = 10;
var b = 5;
console.log("1. Assigment :", a, b)

//2. math
var multiplication = a * b;
var substraction = a - b;
var addition = a + b;
var division = a / b;
console.log("2. Math :", multiplication, substraction, addition, division);

//3. compund assignment
a += 2;
b -= 2;

console.log(a);
console.log(b);
console.log("3. compund assignment :", a, b);


//4. Increment
//Decrement
a--;
//Increment
b++;
console.log("4. Increment & Decrement  :", a, b);

//5. Object Properties Access
console.log(a);
console.log(b);
console.log("5. Object Properties Access  :", a, b);


//6. Equality
//loose equal
console.log("6. Equality  :");

c = a == b;
console.log(c);

//loose not equal
c = a != b;
console.log(c);

//strict equal
c = a === b;
console.log(c);

//strict not equal
c = a !== b;
console.log(c);

//7. Comparison

console.log("7. Comparison  :");
//greater than
c = a > b;
console.log(c);

//less than
c = a < b;
console.log(c);

//greater than equal
c = a >= a;
console.log(c);

c = a >= b;
console.log(c);

//less than equal
c = a <= a;
console.log(c);

c = a <= b;
console.log(c);

//8. Logical
console.log("8. Logical  :");
//AND operator
console.log(a >= 0 && b >= 0);

//OR operator
console.log(a >= 0 || b >= 0);
