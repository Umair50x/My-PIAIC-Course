
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. 
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, 
//replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

{
let guestInvList = ["Person 1", "Person 2", "Person 3", "Person 4", 
    "Person 5", "Person 6", "Person 7"];

let guestInvListmsgs = [", I am inviting you for a late-night steak dinner at my home. Please come.", 
                        ", I am inviting you for a late-night steak dinner at my home. Please come.", 
                        ", I am inviting you for a late-night steak dinner at my home. Please come.", 
                        ", I am inviting you for a late-night steak dinner at my home. Please come.", 
                        ", I am inviting you for a late-night steak dinner at my home. Please come.", 
                        ", I am inviting you for a late-night steak dinner at my home. Please come.", 
                        ", I am inviting you for a late-night steak dinner at my home. Please come." ];

let preMsg = "Dear ";

    for (let i = 0; i < guestInvList.length; i++) {
        console.log(preMsg + guestInvList[i] + guestInvListmsgs[i]);
    }

console.log("Unfortunately, " + guestInvList[4] + " is out of city and cannot visit us on the invitation.");

guestInvList.splice(4, 1, "new 5th person");
console.log(guestInvList);

console.log("\nNEW INVITATION LIST AND THEIR MESSAGES\n");

    for (let i = 0; i < guestInvList.length; i++) {
        console.log(preMsg + guestInvList[i] + guestInvListmsgs[i]);
    };

}