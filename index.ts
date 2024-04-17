#! /usr/bin/env node

import inquirer from "inquirer";

//1) computer will generate a random number-done on line 7
//2) user input for guessing number -  done on line 9
//3) compare user input with computer generated number and show result-done on 15

const randomnumber=Math.floor(Math.random() * 6 + 1)
const answer= await inquirer.prompt([{
    message: "Please guess a number between 1-6:",
    type: "number",
    name: "UserGuessedNumber",
}
]);

if( answer.UserGuessedNumber === randomnumber){
    console.log("Congratulations! You guess right number");
}
else {
    console.log(" You guess wrong number");
}


