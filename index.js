#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "Please enter farst number", type: "number", name: "farstNumber" },
    {
        message: "Please enter second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.farstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.farstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.farstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.farstNumber / answer.secondNumber);
}
else {
    console.log("Please enter the valid number");
}
