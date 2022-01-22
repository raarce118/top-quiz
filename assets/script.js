var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions 
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 60;
var alert =document.getElementById("alert");
var info = document.getElementById("info");

var allScores = [];

var questions = [
    {
        title: "Commonly used datypes DO NOT include:---",
        choices: ["strings","booleans","alerts", "numbers"],
        answer : "alerts"    
    },

    {
        title: "The condition in an if/else statement is enclosed within:---",
        choices: ["quotes","Curly brackets","parentheses", "square brackets"],
        answer : "parentheses"
        
    },

    {  title: "Arrays in Javascript can be used to store _______:---",
       choices: ["numbers and strings", "other Arrays", "booleans", "all of the above"],
       answer: "all of the above"


    },

    {  title: "String values must be enclosed within _____ when being assigned to variables:---",
       choices: ["commas", "curley brackets", "quotes", "parenthesis"],
       answer: "quotes"


    },

    {  title: "A very usefuly tool used during development and debugging for printing content to the debugger is:---",
    choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"

     },

 
  
