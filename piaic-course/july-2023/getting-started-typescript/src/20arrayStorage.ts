#!/usr/bin/env node

const arrayOfThings: string[] = [
  "Everest",
  "Nile",
  "Canada",
  "Makkah",
  "Farsi",
];

console.log("list of things: ");

arrayOfThings.forEach((thing, index) => {
  console.log(`${index + 1}: ${thing}`);
});

//Think of something you could store in a array.
//For example, you could make a list of mountains,
//rivers, countries, cities, languages, or anything else you’d like.
//Write a program that creates a list containing these items.
