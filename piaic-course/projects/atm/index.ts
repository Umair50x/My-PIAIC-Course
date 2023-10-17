#!usr/bin/env node


import inquirer from "inquirer";
import { isModuleNamespaceObject } from "util/types";

interface ansType {
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number
}

type User = {
    userId: string,
    userPin: number
}


let user: User[] = [
    {
        userId: "ahmed",
        userPin: 1234
    }, {
        userId: "ali",
        userPin: 12345
    }, {
        userId: "jani",
        userPin: 123123
    }
];

let balance: number = Math.floor(Math.random() * 100000);

