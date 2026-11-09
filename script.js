//Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Welcome message
const exploreButton = document.querySelector(".btn");

exploreButton.addEventListener("click", function () {
    console.log("Welcome to StudyBuddy!");
});


// Scroll to top button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topButton";
topButton.title = "Back to top";

document.body.appendChild(topButton);


// Show button when scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});


// Scroll to top when clicked
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Section reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});