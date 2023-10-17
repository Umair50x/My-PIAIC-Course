import inquirer from "inquirer";

let operationList = [
  {
    name: "num1",
    type: "number",
    message: "Select your first number: "
  },
  {
    name: "num2",
    type: "number",
    message: "Select your second number: "
  },
  {
    name: "operation",
    type: "list",
    message: "Select your math operation: ",
    choices: ["add", "subtract", "divide", "multiply", "modulus", "exponent"]
  },
];

export let { num1, num2, operation } = await inquirer.prompt(operationList);

