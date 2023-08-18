import { hidden } from "./hidden.js";

// Variables
var i = 0;
let ans;
let count = 0;
let count__cancel = 0;
let count__wrong = 0;
let temp;
const timer = 2000;
const hintTimer = 18000;

// DOM Variables
const hint = document.querySelector("#hint");
const question = document.querySelector("#question");
let answer = document.querySelector("#answer");
const subBtn = document.querySelector("#btn");
const Msg = document.querySelector(".msg");
// const clock = document.querySelector("#clock");

// questions array
const questions = [
  "1. One line code to Add two numbers without using addition operator?",
  "2. As a developer, you usually get mad at me because I complain a lot, although I'm usually right. What am I?",
  "3. The more you code, the more of me there is. I may be gone for now but you can't get rid of me forever. What am I?",
  "4. I have a pulse but no heart, a brain but can't think and while I can sleep, I usually don't stay asleep for long? What am I?",
];

// Final question Function

const showAlert = () => {
  setTimeout(() => {
    alert(
      "5. Complete the HTML code to see the next clue. Ask the Organizer to show you the HTML file"
    );
  }, timer);
  question.innerHTML =
    "Find the HTML attribute and complete it.<br/><br/>After 3 Minutes Hint will be shown inside Hint box.";
};

// I am always with you, but cannot be seen.

function clear() {
  count__cancel = 0;
  count__wrong = 0;
}

const right = () => {
  count++;
  Msg.innerHTML =
    "<span class='count'>" + count + "</span>" + " >> .Right Answer";
  document.getElementById("answer").style.borderColor = "transparent";
};

const cancel = () => {
  count__cancel++;
  Msg.innerHTML =
    "<span class='count'>" +
    count__cancel +
    "</span>" +
    " >> .Answer the Question";
};

const wrong = () => {
  count__wrong++;
  Msg.innerHTML =
    "<span class='count'>" + count__wrong + "</span>" + " >> .Wrong Answer";
  answer.value = "";
  document.getElementById("answer").style.borderColor = "red";
};

// function to clear answer console
const clean = () => {
  const cleanAns = setTimeout(cleanFunc, timer);
};

function cleanFunc() {
  Msg.innerHTML = "";
  answer.value = "";
  hint.innerHTML = "";
}

// Function call to start the code
changeAnswer();

const changeAnsTimeout = () => setTimeout(changeAnswer, 2000);

function changeAnswer() {
  question.innerHTML = questions[i];
  i = i + 1;
}

// function to show the hint
let hintOneTimeOut = 1;

startOne();
// clearHintOne();

function startOne() {
  hintOneTimeOut = setTimeout(hintOne, hintTimer);
}

function clearHintOne() {
  clearTimeout(hintOneTimeOut);
}

function hintOne() {
  hint.innerHTML =
    "&nbsp;&nbsp;In Math. What is the result when you multiply minus sign with minus sign (ie. - * -) what will be the result.";
}

// hint two

let hintTwoTimeOut = 1;

function startTwo() {
  hintTwoTimeOut = setTimeout(hintTwo, hintTimer);
}

function clearHintTwo() {
  clearTimeout(hintTwoTimeOut);
}

function hintTwo() {
  hint.innerHTML = "&nbsp;&nbsp;Console Where Errors are shown";
}

// hint three
let hintThreeTimeOut = 1;

function startThree() {
  hintThreeTimeOut = setTimeout(hintThree, hintTimer);
}

function clearHintThree() {
  clearTimeout(hintThreeTimeOut);
}

function hintThree() {
  hint.innerHTML = "&nbsp;&nbsp;Another Word for error in Programming";
}

// hint four
let hintFourTimeOut = 1;

function startFour() {
  hintFourTimeOut = setTimeout(hintFour, hintTimer);
}

function clearHintFour() {
  clearTimeout(hintFourTimeOut);
}

function hintFour() {
  hint.innerHTML = "&nbsp;&nbsp;I am Hardware of computer.";
}

// five hint

let hintFiveTimeOut = 1;

function startFive() {
  hintFiveTimeOut = setTimeout(hintFive, hintTimer);
}

function clearHintFive() {
  clearTimeout(hintFiveTimeOut);
}

function hintFive() {
  hint.innerHTML =
    "<br><br>I am always with you, but cannot be seen.I can be shared, but not given away. I can make you feel happy, but sometimes I make you feel sad. What am I? <br>Write answer inside the HTML attribute.";
}

// function Object --------------------------

const one = function oneQ() {
  ans = answer.value;
  if (ans == "") {
    console.log("Answer the Question");
    cancel();
  } else if (ans.replace(/\s+/g, "").includes("-(-") || ans.includes("- -")) {
    right();
    clean();
    clear();
    changeAnsTimeout();
    clearHintOne();
    startTwo();
    subBtn.removeEventListener("click", one);
    subBtn.addEventListener("click", two);
  } else {
    wrong();
  }
};

const two = function () {
  ans = answer.value;
  temp = ans.toLowerCase();

  if (ans == "") {
    console.log("Answer the Question");
    cancel();
  } else if (temp.includes("compiler") && temp == "compiler") {
    right();
    clean();
    clear();
    changeAnsTimeout();
    clearHintTwo();
    startThree();
    subBtn.removeEventListener("click", two);
    subBtn.addEventListener("click", three);
  } else {
    wrong();
  }
};

const three = function () {
  ans = answer.value;
  temp = ans.toLowerCase();

  if (ans == "") {
    console.log("Answer the Question");
    cancel();
  } else if (temp.includes("bug") && temp == "bug") {
    right();
    clean();
    clear();
    changeAnsTimeout();
    clearHintThree();
    startFour();
    subBtn.removeEventListener("click", three);
    subBtn.addEventListener("click", four);
  } else {
    wrong();
  }
};

const four = function () {
  ans = answer.value;
  temp = ans.toLowerCase();

  if (ans == "") {
    cancel();
  } else if (temp.includes("cpu") && temp == "cpu") {
    right();
    clean();
    clear();
    clearHintFour();
    startFive();
    showAlert();
    subBtn.removeEventListener("click", four);
  } else {
    wrong();
  }
};

// Event Listener
subBtn.addEventListener("click", one);

const hiddenMsg = hidden();
const secret = document.querySelector(".secret");
secret.innerHTML = hiddenMsg;
