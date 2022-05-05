let input = document.getElementById("questionName");
console.log(input);






let userName1 = prompt('What is your name?')

// Take input name and capitalize first letter

function capitalizeFirstLetter(userName1) {
    return userName1.charAt(0).toUpperCase() + userName1.slice(1);
  }
  console.log(capitalizeFirstLetter(`${userName1}`));

// let userName = "Phil";

// userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion1 = prompt("What is your question?");

console.log(`${userName1}, you asked '${userQuestion1}'...`);

// let userQuestion = "Will it rain tomorrow?";

// console.log(`${userName}, you asked '${userQuestion}'...`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    console.log("Cannot predict right now");
    break;

  case 1:
    console.log("My sources say no");
    break;

  case 2:
    console.log("Do not count on it");
    break;

  case 3:
    console.log("Reply hazy, try again...");
    break;

  case 4:
    console.log("Outlook not so good");
    break;

  case 5:
    console.log("On the fence");
    break;

  case 6:
    console.log("Somewhat likely");
    break;

  case 7:
    console.log("Signs point to yes");
    break;

  case 8:
    console.log("It is certain!");
    break;

  default:
    console.log("I seem to have had an accident... ");
}

console.log(`${eightBall}`);
