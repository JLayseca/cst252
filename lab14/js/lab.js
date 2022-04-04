/*
 * Author: Jeremy
 * Created: 15th March
 * License: Public Domain
 */

//reference HTML variables
const quizContainer = document.getElementByIdyId("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

//Function that builds quiz
function quizBuilder(){

}

//Function that displays results
function resultDisplay(){

}

//Calls function to display the quiz immediately
quizBuilder();

//Runs the result displaying function when the button is pressed
submitButton.addEventListener("click", resultDisplay);

const questions = [
  {
    question: "What percent of plastic is recycled?",
    answers: {
      a: "52%",
      b: "24%",
      c: "9%",
      d: "3%"
    },
    rightAnswer: "c"
  },
  {
    question: "How many tons of plastic are estimated to be in the ocean?",
    answers: {
      a: "52%",
      b: "24%",
      c: "9%",
      d: "3%"
    },
    rightAnswer: "c"
  },
  {
    question: "What percent of plastic is recycled?",
    answers: {
      a: "52%",
      b: "24%",
      c: "9%",
      d: "3%"
    },
    rightAnswer: "c"
  },
]
