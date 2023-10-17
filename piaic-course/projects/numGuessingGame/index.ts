#!usr/bin/env node
import inquirer from "inquirer";

async function main() {
  // Generate a random number from 1 to 5.
  const randomNumber: number = Math.floor(Math.random() * 5) + 1;

  // Prompt the user to guess the number.
  const { userGuess }: { userGuess: number } = await inquirer.prompt([
    {
      type: "number",
      name: "userGuess",
      message: "Guess a number from 1 to 5: ",
    },
  ]);

  // Compare the user's guess to the random number.
  if (userGuess === randomNumber) {
    console.log("You guessed correctly!");
  } else {
    console.log("Sorry, the correct number was " + randomNumber);
  }
}

main();

/*

This is a number guessing game working through the Command line:
 The computer will generate a random number in a given series,
 The player has to guess the number and win or lose depending on the decision.
 // Make an algo that generate a random number 
 // prompt the user to put a number 
 // compare both numbers; if equal decide winner else loser.


*/
