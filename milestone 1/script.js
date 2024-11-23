// Select elements from the DOM
var toggleButton = document.getElementById("toggle-button");
var skillsSection = document.querySelector(".skills-section");
// Initial state
var isHidden = false;
// Add an event listener to the toggle button
toggleButton.addEventListener("click", function () {
    if (isHidden) {
        // Show the section
        skillsSection.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        // Hide the section
        skillsSection.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
    // Toggle the state
    isHidden = !isHidden;
});
