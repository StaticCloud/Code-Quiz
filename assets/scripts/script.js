// get the container element
var containerEl = document.querySelector(".page-container");

// our function for switching to the appropriate page
var setPage = function(page) {
    // render the right page depending on the value of "page"
    switch(page) {
        case("welcome"):
        renderWelcomePage();
        break;
    }
}

// render our welcome page
var renderWelcomePage = function() {
    // set the attribute of our container element to welcome for styling purposes
    containerEl.setAttribute("data-page", "welcome");
    
    // create heading, paragraph, and button elements
    var headingTextEl = document.createElement("h1");
    headingTextEl.innerHTML = "Coding Quiz!";
    
    var paragraphTextEl = document.createElement("p");
    paragraphTextEl.innerHTML = "Can you answer these 5 code-related questions in under 60 seconds? Answer questions correctly to receive points! Any question answered incorrectly removes 5 seconds from the timer.";

    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start!";

    // add to the page
    containerEl.appendChild(headingTextEl);
    containerEl.appendChild(paragraphTextEl);
    containerEl.appendChild(startButtonEl);
}

setPage("welcome");