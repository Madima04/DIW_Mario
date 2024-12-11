let currentSection = 0;
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const allElements = [header, nav, ...sections];

window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
        if (currentSection < allElements.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
        }
    } else {
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    }
});

function scrollToSection(index) {

    allElements[index].scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    allElements[index].classList.add("animate");
    setTimeout(() => {
        allElements[index].classList.remove("animate");
    }, 1000);
}
