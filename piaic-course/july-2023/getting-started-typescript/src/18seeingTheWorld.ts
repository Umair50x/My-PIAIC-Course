#!/usr/bin/env node



//Seeing the World: Think of at least five places in the world you’d like to visit.
// 1 Store the locations in a array. Make sure the array is not in alphabetical order.
// 2 Print your array in its original order.
// 3 Print your array in alphabetical order without modifying the actual list.
// 4 Show that your array is still in its original order by printing it.
// 5 Print your array in reverse alphabetical order without changing the order of the original list.
// 6 Show that your array is still in its original order by printing it again.
// 7 Reverse the order of your list. Print the array to show that its order has changed.
// 8 Reverse the order of your list again. Print the list to show it’s back to its original order.
// 9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// 10 Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.

let favPlaces = ["California Central Valley", "Victoria", "Melbourne", "Swat", "Kalarkahar"];
console.log("original array: " + favPlaces);

console.log("Alphabetical order: \n" + [...favPlaces].sort());//alphabatically sorted order
// see the end of page *

console.log("original array: " + favPlaces);//original order again

console.log("Reverse Alphabetical order: \n" + [...favPlaces].sort().reverse());//reverse alphabet order???

console.log("original array: " + favPlaces);//original order again

//remaining tasks are just the same




// * toSorted() doesn't work in node -v less than 20, since it's a new feature in JS
// The workaround is to make a shallow copy of the original array with the spread operator [...]
// and append it with sort() function. 