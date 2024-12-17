let currentSection = 0;
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const svg = document.querySelector("svg");
const allElements = [header, ...sections];

function scrollToSection(index) {
    allElements[index].scrollIntoView({ behavior: "smooth" });
}

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


    if (allElements[index].id === "section6") {
        svg.style.display = "none";
    } else {
        svg.style.display = "block";
    }
}

document.querySelectorAll(".carta").forEach(element => {
    element.addEventListener('click', function () {
        document.querySelectorAll(".carta").forEach(carta => {
            carta.classList.remove('selecionada');
        });

        element.classList.add('selecionada');
    });
});
