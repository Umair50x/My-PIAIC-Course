#!/usr/bin/env node

let guestInvList = ["person1", "person2", "person3"];

let preMsg = "Dear ";

let msgToGuest =
  ", I am inviting you for a late-night steak dinner at my home. Please come.";

console.log(preMsg + guestInvList[0] + msgToGuest);
console.log(preMsg + guestInvList[1] + msgToGuest);
console.log(preMsg + guestInvList[2] + msgToGuest);

export { guestInvList, preMsg, msgToGuest };
//Guest List: If you could invite anyone, living or deceased, to dinner,
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.
