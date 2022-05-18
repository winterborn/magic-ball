// Grouped function controller to initiate print out of user responses, together with 8-ball logic output.
function ballLogicAndPrintOutput() {
  printOutput();
  logic();
}


// Take user input (name and question) from html paragraph IDs; fix missing capital letters if entered without; grouped output to screen.
function printOutput() {
  const myName = document.getElementById("myName").value;
  const myQuestion = document.getElementById("myQuestion").value;
  const capitalLetterFix = myName[0].toUpperCase() + myName.substring(1);
  document.getElementById("outputToScreen").innerHTML = capitalLetterFix + ", " + " you asked, " + myQuestion + " " + "My reply is..." + logic();

  // Check whether question includes open-ended question words, if open-ended question words then print error, else return name, question, logic response.
  if (document.getElementById("outputToScreen").innerHTML.includes('who') ||
    document.getElementById("outputToScreen").innerHTML.includes('what') ||
    document.getElementById("outputToScreen").innerHTML.includes('where') ||
    document.getElementById("outputToScreen").innerHTML.includes('how') ||
    document.getElementById("outputToScreen").innerHTML.includes('why')) {
    document.getElementById("outputToScreen").innerHTML = "I cannot answer this type of question, ask another...";
  } else {
    document.getElementById("outputToScreen").innerHTML = capitalLetterFix + ", " + "you asked, " + myQuestion + " " + "My reply is..." + logic();
  }

  // // Check for question mark.
  // if (document.getElementById("outputToScreen").innerHTML.includes("?")) {
  //   document.getElementById("outputToScreen").innerHTML = capitalLetterFix + ", " + " you asked, " + myQuestion + " " + "My reply is..." + logic();
  // } else {
  //   document.getElementById("outputToScreen").innerHTML = capitalLetterFix + ", " + "you asked, " + myQuestion + "?" + " " + "My reply is..." + logic();
  // }
}


// 8-ball logic using switch / case to randomize through potential output responses.
function logic() {

  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";

  switch (randomNumber) {
    case 0:
      console.log("Cannot predict right now");
      return ("Cannot predict right now");
      break;

    case 1:
      console.log("My sources say no");
      return ("My sources say no");
      break;

    case 2:
      console.log("Don't count on it");
      return ("Don't count on it");
      break;

    case 3:
      console.log("Reply hazy, try again...");
      return ("Reply hazy, try again...");
      break;

    case 4:
      console.log("Concentrate and ask again...");
      return ("Concentrate and ask again...");
      break;

    case 5:
      console.log("On the fence");
      return ("On the fence");
      break;

    case 6:
      console.log("Somewhat likely");
      return ("Somewhat likely");
      break;

    case 7:
      console.log("Signs are pointing to yes");
      return ("Signs are pointing to yes");
      break;

    case 8:
      console.log("Without a doubt!");
      return ("Without a doubt!");
      break;

    default:
      console.log("I seem to have had an accident...");
      return ("I seem to have had an accident...");
  }
  console.log(`${eightBall}`);
}