const question = document.getElementById("question");
const answer = document.getElementById("answer");
const progress = document.getElementById("progress");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const restart = document.getElementById("restart-btn")

let score = 0;


let quizData = [ ];

let currentQuestion = 0;


async function loadQuestions(){

         const response = await fetch('questions.json'); 
         const downloadedData = await response.json();
         quizData =  downloadedData.sort(() =>  Math.random() - 0.5);

    loadQuiz();
}


function showResult(text, color) {
    answer.innerHTML = text;
    answer.style.color = color;
}

function loadQuiz() {
    if (currentQuestion < quizData.length) {
        progress.innerText = `Pytanie ${currentQuestion + 1}  z ${quizData.length}`;
        question.innerText = quizData[currentQuestion].pytanie;
        btn1.innerText = quizData[currentQuestion].odpowiedzA;
        btn2.innerText = quizData[currentQuestion].odpowiedzB;
        btn3.innerText = quizData[currentQuestion].odpowiedzC;
    } else {
     let percentage = Math.round((score / quizData.length) * 100);  

     if(percentage >= 50){
        question.innerText = `super zdany egzamin !!! Twoj wynik to ${percentage}% , gratulacje!!`
    }else  {
        question.innerText = `niestety egzamin nie zdany , twoj wynik to ${percentage}% wymagane do zdanie to 50%  , powodzenia nastepnym razem !`
    }
        progress.innerText = "";
        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "none";
        restart.style.display = "block"
    }
}


function checkAnswer(userChoice) {
    setTimeout(()=> {
        answer.innerText = "";
        loadQuiz();
    }, 1500);
    const correctAnswer = quizData[currentQuestion].poprawna;

    if (userChoice === correctAnswer) {
        score++;
        showResult("Poprawna odp!", "green");
    } else {
        showResult("Niepoprawna odp!", "red");
    }

    currentQuestion++;
    loadQuiz(); 
}

function restartQuiz(){
     currentQuestion = 0;
     score = 0;
    answer.innerText = "";
    question.innerText = "";
    restart.style.display = "none"
    btn1.style.display = "inline-block"
    btn2.style.display = "inline-block"
    btn3.style.display = "inline-block"

    loadQuiz();
}


btn1.addEventListener('click', () => {
    checkAnswer("A");
});

btn2.addEventListener('click', () => {
    checkAnswer("B");
});

btn3.addEventListener('click', () => {
    checkAnswer("C");
});

restart.addEventListener("click", ()=>{
    restartQuiz();
})

loadQuestions();