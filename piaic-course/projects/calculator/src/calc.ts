#!usr/bin/env node

//calculator main entrypoint

import { num1, num2, operation } from "./operations/inquiryOps.js";
import { add } from "./operations/add.js";
import { subtract } from "./operations/subtract.js";
import { divide } from "./operations/divide.js";
import { multiply } from "./operations/multiply.js";
import { modulus } from "./operations/modulus.js";
import { exponent } from "./operations/exponent.js";

async function calculator(): Promise<void> {
  switch (operation) {
    case "add":
      console.log(add(num1, num2));
      break;
    case "subtract":
      console.log(subtract(num1, num2));
      break;
    case "divide":
      console.log(divide(num1, num2));
      break;
    case "multiply":
      console.log(multiply(num1, num2));
      break;
    case "modulus":
      console.log(modulus(num1, num2));
      break;
    case "exponent":
      console.log(exponent(num1, num2));
      break;

    default:
      break;
  }
  return;
}

calculator();
