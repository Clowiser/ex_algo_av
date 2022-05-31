// Exemple 1 : Utilisation d'une variable temporaire
//take input from the users
let a = prompt('Enter the first variable: ');
// 42
let b = prompt('Enter the second variable: ');
// 36

//create a temporary variable
let temp;

//swap variables
temp = a;
// temps = 42
a = b;
// 42 = 36
b = temp;
// 36 = 42

console.log(`The value of a after swapping: ${a}`);
// 36
console.log(`The value of b after swapping: ${b}`);
// 42

// Exemple 2 : Utilisation de l'affectation de déstructuration es6(ES2015)
//take input from the users
// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');
//
// //using destructuring assignment
// [a, b] = [b, a];
//
// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);