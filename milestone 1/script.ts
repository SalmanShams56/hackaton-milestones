// Select elements from the DOM
const toggleButton = document.getElementById("toggle-button") as HTMLButtonElement;
const skills = document.getElementById(".skills-section") as HTMLElement;

// // Initial state: Section is visible
// let isHidden = true;

// Add an event listener to the toggle button
toggleButton.addEventListener("click", () => {
    if (skills.style.display === 'none') {
        // Show the section
        skills.style.display = "block";
    } else {
        // Hide the section
        skills.style.display = "none";

    }


});
