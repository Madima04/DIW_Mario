let currentSection = 0;
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const svg = document.querySelector("svg");
const allElements = [header, ...sections];

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

let paises = document.querySelectorAll("polygon");
paises.forEach(pais => {
    pais.addEventListener("click", () => {
        pais.style.fill = "#E5D9F2";
        pais.style.fillOpacity = "1";
        pais.style.strokeWidth = "0.5";
    });
});

