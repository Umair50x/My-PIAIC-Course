#!/usr/bin/env node

// Tests for equality and inequality with strings
console.log("String Equality Test:");
console.log("apple" == "apple"); // True
console.log("banana" != "banana"); // False

// Tests using the lower case function
console.log("Lowercase Test:");
console.log("HELLO".toLowerCase() == "hello"); // True
console.log("WORLD".toLowerCase() != "World"); // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical Tests:");
console.log(5 == 5); // True
console.log(10 === 5); // True
console.log(10 > 5); // True
console.log(5 < 10); // True
console.log(5 >= 5); // True
console.log(10 <= 5); // False

// Tests using "and" and "or" operators
console.log("Logical Operators Test:");
console.log(true && true); // True
console.log(true || false); // True
console.log(false && true); // False
console.log(true || true); // True

// Test whether an item is in an array
const fruits = ["apple", "banana", "cherry", "date"];
console.log("Array Inclusion Test:");
console.log(fruits.includes("cherry")); // True
console.log(fruits.includes("grape")); // False

// Test whether an item is not in an array
console.log("Array Exclusion Test:");
console.log(!fruits.includes("mango")); // True
console.log(!fruits.includes("apple")); // False

// More Conditional Tests: You don’t have to limit the number of
// tests you create to 10. If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
