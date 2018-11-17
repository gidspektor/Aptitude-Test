var current = 1

/**
 * adds the active class to the first question
 * function is called when questions are inserted into html and calls trackActiveQuestion() to update
 * the active question in the navbar
 */
function active() {
    let questionCount = document.querySelectorAll('#questions .question').length
    document.querySelector(".q_" + current).classList.add("active")
    document.querySelector("h4").textContent = current + "/" + questionCount
    trackActiveQuestion(current)
}

/**
 * adds active class to next question, removes from current question
 * makes the prev and next buttons appear when needed
 */
function next() {
    current++
    changeQuestion(current)
}

/**
 * adds active class to prev question, removes from current question
 * makes the prev and next buttons appear when needed
 */
function prev() {
    current--
    changeQuestion(current)
}

/**
 * Takes you to any question based on parameter
 *
 * @param destinationPage is question to load
 */
function changeQuestion(destinationPage) {
    current = destinationPage
    let destinationQuestion = document.querySelector(".q_" + destinationPage)
    let questionCount = document.querySelectorAll('#questions .question').length
    let nextButton = document.querySelector(".next")
    let prevButton = document.querySelector(".prev")
    document.querySelector("h4").textContent = destinationPage + "/" + questionCount

    switch(parseInt(destinationPage)) { // parseInt() in case a string is passed
        case 1:
            prevButton.style.display = "none"
            nextButton.style.display = "block"
            break;
        case questionCount:
            prevButton.style.display = "block"
            nextButton.style.display = "none"
            break;
        default:
            prevButton.style.display = "block"
            nextButton.style.display = "block"
    }

    document.querySelector("#questions .active").classList.remove("active")
    destinationQuestion.classList.add("active")
    trackActiveQuestion(destinationPage)
}

/**
 * Fills the question navbar with clickable elements that takes you to the given question number.
 */
function fillNav() {
    let nav = document.querySelector("#question-nav")
    let questions = document.querySelectorAll('.question')
    questions.forEach(function (question) {
        let navItem = document.createElement('div')
        navItem.classList.add('nav-item', 'unanswered-nav-box')
        navItem.textContent = question.dataset.id
        navItem.addEventListener('click', function () {
            changeQuestion(question.dataset.id)
        })
        nav.appendChild(navItem)
    })
}


document.querySelector(".next").addEventListener("click", next)
document.querySelector(".prev").addEventListener("click", prev)