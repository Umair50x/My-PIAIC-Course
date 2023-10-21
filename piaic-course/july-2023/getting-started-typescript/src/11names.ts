#!/usr/bin/env node
//Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.
let anArray: string[] = ["friend1", "friend2", "friend3", "friend4"];

function logArrValues() {
  console.log(anArray[0]);
  console.log(anArray[1]);
  console.log(anArray[2]);
  console.log(anArray[3]);
}
logArrValues();
export { anArray, logArrValues };
