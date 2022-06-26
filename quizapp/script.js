const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const score = document.getElementById('right-answers')

let shuffledQuestions, currentQuestionIndex
let quizScore = 0;

startButton.addEventListener('click',startGame)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    score.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
    quizScore = 0
}

function setNextQuestion (){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question 
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectButton = e.target
    const correct = selectButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{
        score.classList.remove('hide')
        score.innerText = 'Your Score is ' + quizScore + '/' + shuffledQuestions.length;
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    if(selectButton.dataset = correct){
        quizScore ++;
    }

}


function setStatusClass(element, correct){

    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    },
    {
        question: "Who is the best Youtuber?",
        answers: [
            { text: 'Web Dev Simplified', correct: true},
            { text: 'Taversy Media', correct: true},
            { text: 'Dev Ed', correct: true},
            { text: 'Fun Fun Function', correct: true}
        ]
    }, 
    {
        question: "Is Web develoment fun?",
        answers: [
            { text: 'Kinda', correct: false},
            { text: 'YES!', correct: true},
            { text: 'Um No', correct: false},
            { text: 'IDK', correct: false}
        ]
    },
    {
        question: 'which of these is a javascrit framework?',
        answers :[
            
                {text: 'Python', correct: false},
                {text: 'Django', correct: false},
                {text: 'React', correct: true},
                {text: 'Eclipse', correct: false},
        ],
    },
    {
        question: "What is 6 * 2?",
        answers: [
            { text: '8', correct: false},
            { text: '16', correct: false},
            { text: '12', correct: true},
            { text: '10', correct: false}
        ]
    }
]