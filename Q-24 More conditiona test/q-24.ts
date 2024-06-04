// Tests for equality and inequality with strings

let string1: string = "Sir Isfahan";
let string2: string = "World";
console.log("\n Equality test (true):", string1 === "Sir Isfahan");  // True
console.log("Inequality test (false):", string2 === "Sir Naveed");  // False

// Tests using the lower case function
let mixedCaseStr: string = "TypeScript";
console.log("\n Lower case test (true):", mixedCaseStr.toLowerCase() === "typescript");  // True
console.log("Lower case test (false):", mixedCaseStr.toLowerCase() === "Typescript!");  // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 20;

console.log("\n Numerical equality test (true):", num1 === 10);  // True
console.log("Numerical inequality test (false):", num1 === num2);  // False

console.log("\n Greater than test (true):", num2 > num1);  // True
console.log("Less than test (false):", num1 > num2);  // False

console.log("\n Greater than or equal test (true):", num1 >= 10);  // True
console.log("Less than or equal test (false):", num2 <= 15);  // False

// Tests using "and" and "or" operators
let bool1: boolean = true;
let bool2: boolean = false;

console.log("\n And operator test (true):", bool1 && !bool2);  // True
console.log("Or operator test (false):", bool2 && bool2);  // False

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "mango"];
console.log("\n Item in array test (true):", fruits.includes("banana"));  // True
console.log("Item in array test (false):", fruits.includes("grape"));  // False

// Test whether an item is not in an array
console.log("\n Item not in array test (true):", !fruits.includes("grape"));  // True
console.log("Item not in array test (false):", !fruits.includes("banana"));  // False
