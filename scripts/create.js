const inquirer = require("inquirer");
const fs = require("fs-extra");
const nodePath = require("path");
const yaml = require("yaml");
const uuid = require("uuid");
const indices = require("../data/indices.json");
const questionTemplate = require("../templates/question.json");

const contributors = yaml.parse(
  fs.readFileSync(nodePath.join(__dirname, "../contributors.yml"), "utf-8")
);

const handleAnswers = ({ username, path }) => {
  if (!contributors.includes(username)) {
    contributors.push(username);
    fs.writeFileSync(
      nodePath.join(__dirname, "../contributors.yml"),
      yaml.stringify(contributors)
    );
  }
  const id = `${uuid.v4()}`;
  const question = {
    id,
    ...questionTemplate,
    code: `function multiplyBy2(num) {
    return num * 2;
  }
  
  function outer() {
    let counter = 0;
    function increment() {
      if(counter > 1) {
        counter = 0
      } else {
        counter++;
      }
    }
    function getCounter() {
      return counter;
    }
    return {
      increment,
      getCounter,
    };
  }
  
  const myObject = outer();
  
  myObject.increment();
  myObject.increment();
  myObject.increment();
  const result = multiplyBy2(myObject.getCounter());
  `,
  };
  fs.writeJSONSync(
    nodePath.join(__dirname, `../data/questions/${id}.json`),
    question,
    {
      spaces: 2,
    }
  );
  indices[path].push(id);
  fs.writeJSONSync(nodePath.join(__dirname, `../data/indices.json`), indices, {
    spaces: 2,
  });
};

inquirer
  .prompt([
    {
      type: "input",
      message: "What's your Github username?",
      name: "username",
    },
    {
      type: "list",
      message: "What's the question path",
      choices: ["javascript", "react"],
      name: "path",
    },
  ])
  .then(handleAnswers)
  .catch((error) => {
    console.error(error.message);
  });
