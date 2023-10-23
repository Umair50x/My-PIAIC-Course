#!/usr/bin/env node

import { magiciansArr, showMagician } from "./41magicians.js";

export function makeGreatMagician(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
  }
}
makeGreatMagician(magiciansArr);
showMagician(magiciansArr);

//Great Magicians: Start with a copy of your program from Exercise 39.
//Write a function called make_great() that modifies the array of magicians
// by adding the phrase the Great to each magician’s name. Call show_magicians()
//to see that the list has actually been modified.
