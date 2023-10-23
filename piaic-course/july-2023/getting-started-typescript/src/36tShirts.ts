#!/usr/bin/env node

function makeShirt(size: number, msg: string) {
  console.log(`Shirt size: ${size}`);
  console.log(`Message to print: ${msg}`);
}

makeShirt(15, "I love JS");
//T-Shirt: Write a function called make_shirt() that accepts a size and
// the text of a message that should be printed on the shirt.
//The function should print a sentence summarizing the size of the
//shirt and the message printed on it. Call the function.
