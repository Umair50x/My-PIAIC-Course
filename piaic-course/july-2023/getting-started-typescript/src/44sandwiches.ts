#!/usr/bin/env node

function makeSandwich(...sandwichItems: string[]) {
  console.log("\nSandwich Order: ");
  for (const item of sandwichItems) {
    console.log(`We put a ${item}`);
  }
}

makeSandwich("omelete", "cucumber", "salad", "potato");
makeSandwich("Bread", "Ham", "Cheese", "Lettuce");
makeSandwich("Bread", "Turkey", "Tomato");

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
//using a different number of arguments each time.
