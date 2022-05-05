function printOutput() {
  const myName = document.getElementById("myName").value;
  const myQuestion = document.getElementById("myQuestion").value;
  const capitalLetterFix = myName[0].toUpperCase() + myName.substring(1);
  document.getElementById("outputToScreen").innerHTML = capitalLetterFix + ", " + "you asked, " + myQuestion + "." + "My reply is..." + logic();
}

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
      console.log("Do not count on it");
      return ("Do not count on it");
      break;

    case 3:
      console.log("Reply hazy, try again...");
      return ("Reply hazy, try again...");
      break;

    case 4:
      console.log("Outlook not so good");
      return ("Outlook not so good");
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
      console.log("Signs point to yes");
      return ("Signs point to yes");
      break;

    case 8:
      console.log("It is certain!");
      return ("It is certain!");
      break;

    default:
      console.log("I seem to have had an accident...");
      return ("I seem to have had an accident...");
  }
  console.log(`${eightBall}`);
}