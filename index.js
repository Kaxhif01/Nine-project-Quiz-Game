#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.redBright("=").repeat(50));
console.log(chalk.cyanBright.bold.italic("\n \tWelcome to 'Kaxh' Quiz Game!\n"));
console.log(chalk.redBright("=").repeat(50));
console.log(chalk.green("\nYour winning criteria is to gain 4 points.\n"));
console.log(chalk.greenBright("Every correct answer give you 1 point."));
let points = 0;
let questions1 = await inquirer.prompt([
    {
        name: "one",
        message: chalk.yellow("\n \ttypyscript is a superset of ?\n"),
        type: "list",
        choices: ["C++", "Javascript", "Python", "Java"],
    },
]);
if (questions1.one === "Javascript") {
    console.log(chalk.cyanBright.italic.bold("\n \tCorrect answer"));
    console.log(chalk.green("You get 1 point"));
    points++;
}
else {
    console.log(chalk.redBright.bold("\n \tOopsy! Wrong answer"));
}
let questions2 = await inquirer.prompt([
    {
        name: "two",
        message: chalk.yellow("\n \tWhat is the capital of Australia?\n"),
        type: "list",
        choices: ["Hobart", "Melbourne", "Canberra", "Sydney"],
    },
]);
if (questions2.two === "Canberra") {
    console.log(chalk.cyanBright.italic.bold("\n \tCorrect answer"));
    console.log(chalk.green("You get 1 point"));
    points++;
}
else {
    console.log(chalk.redBright.bold("\n \tOopsy! Wrong answer"));
}
let questions3 = await inquirer.prompt([
    {
        name: "three",
        message: chalk.yellow("\n \twho is the Chief Minister of sindh?\n"),
        type: "list",
        choices: [
            "Bilawal Bhutto",
            "Asif Ali zardari",
            "Murad Ali Shah",
            "Nasir Hussain Shah",
        ],
    },
]);
if (questions3.three === "Murad Ali Shah") {
    console.log(chalk.cyanBright.italic.bold("\n \tCorrect answer"));
    console.log(chalk.green("You get 1 point"));
    points++;
}
else {
    console.log(chalk.redBright.bold("\n \tOopsy! Wrong answer"));
}
let questions4 = await inquirer.prompt([
    {
        name: "four",
        message: chalk.yellow("\n \twhat is the formula of Water?\n"),
        type: "list",
        choices: ["H2", "H2O", "C02", "Nacl"],
    },
]);
if (questions4.four === "H2O") {
    console.log(chalk.cyanBright.italic.bold("\n \tCorrect answer"));
    console.log(chalk.green("You get 1 point"));
    points++;
}
else {
    console.log(chalk.redBright.bold("\n \tOopsy! Wrong answer"));
}
let questions5 = await inquirer.prompt([
    {
        name: "five",
        message: chalk.yellow("\n \twho is the captain of Pakistan Men's cricket team?\n"),
        type: "list",
        choices: ["Shaheen", "Amir", "Imad", "Babar"],
    },
]);
if (questions5.five === "Babar") {
    console.log(chalk.cyanBright.italic.bold("\n \tCorrect answer"));
    console.log(chalk.green("You get 1 point"));
    points++;
}
else {
    console.log(chalk.redBright.bold("\n \tOopsy! Wrong answer"));
}
let questions6 = await inquirer.prompt([
    {
        name: "six",
        message: chalk.yellow("\n \tSun consist of 70% ?\n"),
        type: "list",
        choices: ["Oxygen", "Hydrogen", "Helium", "None of these"],
    },
]);
if (questions6.six === "Hydrogen") {
    console.log(chalk.cyanBright.italic.bold("\n \tCorrect answer"));
    console.log(chalk.green("You get 1 point"));
    points++;
}
else {
    console.log(chalk.redBright.bold("\n \tOopsy! Wrong answer"));
}
let questions7 = await inquirer.prompt([
    {
        name: "seven",
        message: chalk.yellow("\n \tAnthropology is study of____________?\n"),
        type: "list",
        choices: ["Culture", "Society", "Human", "Animal"],
    },
]);
if (questions7.seven === "Human") {
    console.log(chalk.cyanBright.italic.bold("\n \tCorrect answer"));
    console.log(chalk.green("You get 1 point"));
    points++;
}
else {
    console.log(chalk.redBright.bold("\n \tOopsy! Wrong answer"));
}
let questions8 = await inquirer.prompt([
    {
        name: "eight",
        message: chalk.yellow("\n \twhich country has 13 months in a year?n"),
        type: "list",
        choices: ["Eritrea", "Ethiopia", "Gabon", "Gambia"],
    },
]);
if (questions8.eight === "Ethiopia") {
    console.log(chalk.cyanBright.italic.bold("\n \tCorrect answer"));
    console.log(chalk.green("You get 1 point"));
    points++;
}
else {
    console.log(chalk.redBright.bold("\n \tOopsy! Wrong answer"));
}
if (points >= 4) {
    console.log(chalk.greenBright.bold.italic("\n \tCongratulations! You win\n"));
    console.log(chalk.cyan(`Your Points: ${chalk.red(points)}`));
}
else {
    console.log(chalk.redBright("\n \tOopsy! You lost, better luck next time\n"));
    console.log(chalk.cyan(`Your Points: ${chalk.red(points)}`));
}
