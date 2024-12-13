let currentSection = 0;
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const svg = document.querySelector("svg");
const allElements = [header, ...sections];
const svgElements = svg.querySelectorAll("polygon, rect, path, circle");

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
    if (allElements[index] !== svg) {
        allElements[index].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        allElements[index].classList.add("animate");
        setTimeout(() => {
            allElements[index].classList.remove("animate");
        }, 1000);
    }

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

