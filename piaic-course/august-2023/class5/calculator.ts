#!/usr/bin/env node

import inquirer from "inquirer";
//*
import { add } from "./src/operations/add.js";
//**
import { divide } from "./src/operations/divide.js";
import { multiply } from "./src/operations/multiply.js";
import { subtract } from "./src/operations/subtract.js";

let { num1, num2, operation } = await inquirer.prompt([
  {
    //use objects{} inside array[]
    message: "Enter first number",
    type: "number",
    name: "num1",
  },
  {
    message: "Enter second number",
    type: "number",
    name: "num2",
  },
  {
    message: "What operation do you want to perform?",
    choices: ["add +", "subtract -", "divide /", "multiply *"],
    type: "list",
    name: "operation",
  },
]);

if (operation == "add +") {
  console.log(add(num1, num2));
} else if (operation == "subtract -") {
  console.log(subtract(num1, num2));
} else if (operation == "divide /") {
  console.log(divide(num1, num2));
} else if (operation == "multiply *") {
  console.log(multiply(num1, num2));
} else {
  console.log("Check your code for problems.");
} //end IF

// console.log(num1, num2, operation);//log all values to console

//check inquirer docs
//* showed an error which was resolved with npm i --save-dev @types/inquirer making it a devdependency
//** full path and extension needed when using nodenext configuration in tsconfig.json
