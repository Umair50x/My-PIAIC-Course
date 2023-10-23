#!/usr/bin/env node

import { guestInvList, preMsg, msgToGuest } from "./14guestList.js";

console.log(
  "Unfortunately, " +
    guestInvList[2] +
    " is out of city and cannot visit us on the invitation."
);

guestInvList.splice(2, 1, "person4");

for (let i = 0; i < guestInvList.length; i++) {
  console.log(preMsg + guestInvList[i] + msgToGuest);
}

export { guestInvList, preMsg, msgToGuest };

//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14.
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list,
//replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
