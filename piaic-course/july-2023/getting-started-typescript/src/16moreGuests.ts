#!/usr/bin/env node

import { guestInvList, preMsg, msgToGuest } from "./15changingGuestList.js";

console.log(
  "Voila! We found a bigger dinner table. Going to invite more people."
);

guestInvList.unshift("newPerson");
guestInvList.splice(Math.floor(guestInvList.length / 2), 0, "MidPerson"); //middle index
guestInvList.push("lastPerson");

for (let i = 0; i < guestInvList.length; i++) {
  console.log(preMsg + guestInvList[i] + msgToGuest);
}

export { guestInvList, preMsg, msgToGuest };

//More Guests: You just found a bigger dinner table, so now more space is available.
//Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15/changing guest list.
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
