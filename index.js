const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Email Address:",
    name: "email",
  },
  {
    type: "input",
    message: "Github name:",
    name: "github",
  },
  {
    type: "input",
    message: "Title:",
    name: "title",
  },
  {
    type: "input",
    message: "Description:",
    name: "description",
  },
  {
    type: "input",
    message: "Requirements for installation:",
    name: "installation",
  },
  {
    type: "input",
    message: "Description of the usage:",
    name: "usage",
  },
  {
    type: "list",
    message: "License Used:",
    name: "licenses",
    choices: [
      "None",
      "MIT License",
      "GNU Lesser General Public License v3.0",
      "Mozilla Public License 2.0",
      "GNU Affero General Public License v3.0",
      "The Unlicense",
      "Apache License 2.0",
      "GNU General Public License v3.0",
    ],
  },
  {
    type: "list",
    name: "contributorsQuestion",
    message: "Any contributors?",
    choices: ["yes", "no"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Contributors:",
    when: (answers) => {
      if (answers.contributorsQuestion === "yes") {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Instructions for testing:",
    name: "tests",
  },
];

// function to write README file
const writeToFile = (fileName, data) => {
  const filePath = path.join(__dirname, `${fileName}.md`);
  fs.writeFile(filePath, generateMarkdown(data), (err) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("README.md generated successfully!");
    }
  });
};

// function to initialize program
const init = () => {
  inquirer
    .prompt(questions)
    .then((response) => {
      writeToFile("README", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// function call to initialize program
init();
