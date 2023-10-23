#!/usr/bin/env node

const animals: string[] = ["parrot", "dog", "cat"];

console.log("\nMy list of animals: ");
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
console.log("\nMy list of animals with a statement: ");
for (const animal of animals) {
  if (animal === "parrot") {
    console.log(`${animal} is very talkative.`);
  } else if (animal === "dog") {
    console.log(`${animal} is fond of humans.`);
  } else if (animal === "cat") {
    console.log(`${animal} is so arrogant.`);
  }
}
console.log("\nAll these animals make great pet though.");

//Animals: Think of at least three different animals that have a common characteristic.
//Store the names of these animals in a list, and
//then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such
//as A dog would make a great pet.
//• Add a line at the end of your program stating what these animals have in common.
//You could print a sentence such as Any of these animals would make a great pet!
