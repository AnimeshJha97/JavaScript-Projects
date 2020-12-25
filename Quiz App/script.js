/*
  Create the questions.
  Extract the ids.
  Call and Create function to load quiz.
  Check if answer selected is corect or not.
  Increment the score if ans correct.
  Uncheck the previous selected ans.
*/

// Questions created
const quiz = [
  {
    question : "What is your favourite programming language?",
    a : "Java",
    b : "Python",
    c : "C++",
    d : "Java Script",
    correct : "b"
  },
  {
    question : "What is the most used programming language in 2019?",
    a : "Java",
    b : "Python",
    c : "C++",
    d : "Java Script",
    correct : "d"
  },
  {
    question : "What is the President of India?",
    a : "Ambani",
    b : "Modi",
    c : "Sheela",
    d : "None of the above.",
    correct : "d"
  },
  {
    question : "What color background will you prefer here?",
    a : "orange",
    b : "black",
    c : "white",
    d : "blue",
    correct : "b"
  }
];

// Element by ids
const questionEle = document.getElementById("ques");
const aEle = document.getElementById("a_text");
const bEle = document.getElementById("b_text");
const cEle = document.getElementById("c_text");
const dEle = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quizEle = document.getElementById("quiz");
const ansEle = document.querySelectorAll(".options");

let currentQuiz = 0;
let score = 0;

loadQuiz();

// Shows the question on the screen
function loadQuiz(){
// Un-select all the options before displaying the question
  desSelect();
// Get quiz data based on index
  const currentQuizData = quiz[currentQuiz];

  questionEle.innerText = currentQuizData.question;
  aEle.innerHTML = currentQuizData.a;
  bEle.innerHTML = currentQuizData.b;
  cEle.innerHTML = currentQuizData.c;
  dEle.innerHTML = currentQuizData.d;
}

// Fetch the id of answer selected by the user
function getSelected(){
    let answer = undefined;

    ansEle.forEach((ans) => {
      if (ans.checked){
        answer = ans.id;
      }
    });

    return answer;
}

function desSelect(){
  ansEle.forEach((ans) => {
    ans.checked = false;
  });
}

// Action taken when submit button is clicked
submitBtn.addEventListener("click", () =>{
// Store id returned by getSelected() function
  const retAns = getSelected();

  if(retAns){   // Enters only if option is selected, else do nothing
    if(retAns === quiz[currentQuiz].correct){
      score++;  // Score incrments if answer is correct
    }
// increment currentQuiz to get the next index
    currentQuiz++;
// If index is less than length, load Quiz, else, diaplay score.
    if(currentQuiz < quiz.length){
      loadQuiz();
    }
    else{
      //get quiz element and show score
      quizEle.innerHTML = `
        <div class = "reload">
          <h2>Your score is ${score}/${quiz.length}</h2>
          <button class = "btn1" onclick = "location.reload()">Reload</button>
        </div>
      `;
    }
  }
});
