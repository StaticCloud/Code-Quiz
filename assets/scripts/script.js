// get the container element
var containerEl = document.querySelector(".page-container");
var quizQuestion = 0;
var wasCorrect = "";

// questions array, five questions, four options, first element of each array is the question with index 1-4 being answers and index 5 storing the index of the correct answer
var questions = [["JSON is...", "A character from Friday the 13th.", "A file format used for storing and retrieving data.", "A JavaScript library that makes animating HTML elements much easier.", "An object-oriented programming language.", 2],
                ["DOM means...", "Don't Order Mozzarella", "Directly Overclocked Motherboard", "Deficit Oriented Management", "Document Object Model", 4],
                ["How do you reference a class in CSS?", "[class]class:", "#class:", ".class:", "CLASS=class:", 3],
                ["What does the ::before selector do in CSS?", "Adds content below the selected element.", "Prioritizes the styling of the selected element.", "Adds content before the element.", "Styles the most recent occurrence of the selected element after the most recent.", 3],
                ["What is the DOM?", "The engine browsers run on.", "A programming interface that represents the layout of objects on a page.", "The ocular mainframe when a matrix gets fragmented causing an overload in the angular velocity of the CPU.", "The pendulum inside the computer that operates the system clock.", 2]];

// our function for switching to the appropriate page
var setPage = function(page) {
    // render the right page depending on the value of "page"
    switch(page) {
        case("welcome"):
            renderWelcomePage();
            break;
        case("quiz"):
            renderQuizPage(quizQuestion);
            break;
    }
}

// render our welcome page
var renderWelcomePage = function() {
    // remove all elements inside containerEl if there are any
    containerEl.innerHTML = "";

    // set the attribute of our container element to welcome for styling purposes
    containerEl.setAttribute("data-page", "welcome");
    
    // create heading, paragraph, and button elements
    var headingTextEl = document.createElement("h1");
    headingTextEl.innerHTML = "<i>Coding Quiz!</i>";
    
    var paragraphTextEl = document.createElement("p");
    paragraphTextEl.innerHTML = "<i>Can you answer these 5 code-related questions in under 60 seconds? Answer questions correctly to receive points! Any question answered incorrectly removes 5 seconds from the timer.</i>";

    // our self-explanatory start button
    var startButtonEl = document.createElement("button");
    startButtonEl.setAttribute("id", "start-button");
    startButtonEl.textContent = "Start";

    // add to the page
    containerEl.appendChild(headingTextEl);
    containerEl.appendChild(paragraphTextEl);
    containerEl.appendChild(startButtonEl);
}

// render our primary quiz page
var renderQuizPage = function(quizQuestion) {
    // remove all elements inside containerEl if there are any
    containerEl.innerHTML = "";

    // set the page data to quiz for styling reasons
    containerEl.setAttribute("data-page", "quiz");

    // create the header element, set it's value to the current question, and append it to the page
    var questionEl = document.createElement("h1");
    questionEl.innerHTML = questions[quizQuestion][0];
    containerEl.appendChild(questionEl);

    // render our questions, including setting appropriate attributes for their tags
    for (var i = 1; i < questions[quizQuestion][i].length; i++) {
        var answerEl = document.createElement("p");
        answerEl.setAttribute("id", "question");
        answerEl.setAttribute("data-question-index", i);
        answerEl.innerHTML = questions[quizQuestion][i];
        containerEl.appendChild(answerEl);
    }

    // this element will display whether the answer to the previous question was correct
    var wasCorrectEl = document.createElement("div");

    // display "correct" or "incorrect depending on what value wasCorrect is"
    wasCorrectEl.setAttribute("data-was-correct", wasCorrect);
    if (wasCorrect == "true") {
        wasCorrectEl.innerHTML = "<p><i>Correct</i></p>";
    } else if (wasCorrect == "false") {    
        wasCorrectEl.innerHTML = "<p><i>Incorrect</i></p>";
    } else {
        wasCorrectEl.innerHTML = "";
    }

    // finally, append to container
    containerEl.appendChild(wasCorrectEl);

}

var handleClicks = function(event) {
    // get the element clicked on my the user
    var targetEl = event.target;
    
    // load the quiz page once the user hits the start button
    if (targetEl.matches("#start-button")) {
        setPage("quiz");
    }

    // if the user selects an answer to a question
    if (targetEl.matches("#question")) {

        // get the question index attribute of the element
        var questionIndex = targetEl.getAttribute("data-question-index");
        
        // check if it's equal to the correct answer (the value of the object at index 5 in our quiz questions list)
        if (parseInt(questionIndex) === questions[quizQuestion][5]) {
            wasCorrect = "true";
        } else {
            wasCorrect = "false";
        }

        // update the quiz question and re-render the page
        quizQuestion++;

        // if the value of quizQuestion is greater than the available questions...
        if (quizQuestion >= questions.length) {
            containerEl.innerHTML = "Quiz Finished"; // placeholder
        } else {
            // update the quiz page
            setPage("quiz");
        }
    }
}

setPage("welcome");

containerEl.addEventListener("click", handleClicks);
