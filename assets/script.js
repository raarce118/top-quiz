//list of var that will be working with//
var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("countdown");
var titleitem = document.getElementById("title-item");
var nextQuestions 
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 75;
var alert =document.getElementById("alert");
var info = document.getElementById("info");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [

    //Questions listed//
     {
        title: "Commonly used datypes DO NOT include:",
        choices: ["strings","booleans","alerts", "numbers"],
        answer : "alerts"    
    },

    {
        title: "The condition in an if/else statement is enclosed within:",
        choices: ["quotes","Curly brackets","parentheses", "square brackets"],
        answer : "parentheses"
        
    },

    {  title: "Arrays in Javascript can be used to store _______:",
       choices: ["numbers and strings", "other Arrays", "booleans", "all of the above"],
       answer: "all of the above"


    },

    {  title: "String values must be enclosed within _____ when being assigned to variables:",
       choices: ["commas", "curley brackets", "quotes", "parenthesis"],
       answer: "quotes"


    },

    {  title: "A very usefuly tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"

     }

]

//code for starting the quiz and displaying the next question
btnStart.addEventListener("click", startQuiz);
function startQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timecounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions = questions[currentindex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    quizstart()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});

function quizstart(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}


function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }
         
}
function correction(response){
    
    if(response){
        alert.innerText= "Good"
        console.log("Good")
    }else {
        alert.innerText="Wrong"
        count = count -15
        timer.innerHTML = count
        console.log("Wrong")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}