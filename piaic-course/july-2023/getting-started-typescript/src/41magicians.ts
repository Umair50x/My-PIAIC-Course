#!/usr/bin/env node

export const magiciansArr: string[] = ["magician1", "magician2", "magician3"];
export function showMagician(magicians: string[]) {
  magicians.forEach((name) => {
    console.log(name);
  });
}

showMagician(magiciansArr);
//Magicians: Make a array of magician’s names.
//Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
