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

let cartas = Array.from(document.querySelectorAll(".carta"));

function actualizarZIndex() {
    cartas.forEach((carta, index) => {
        carta.style.zIndex = cartas.length - index;
    });
}

function seleccionarCarta(event) {
    const cartaSeleccionada = event.currentTarget;
    cartas = cartas.filter(carta => carta !== cartaSeleccionada);
    cartas.push(cartaSeleccionada);
    cartas.forEach(c => c.classList.remove('selecionada'));
    cartaSeleccionada.classList.add('selecionada');
    actualizarZIndex();
}

function iniciar() {
    cartas.forEach(carta => {
        carta.addEventListener('click', seleccionarCarta);
    });

    actualizarZIndex();
}

iniciar();

document.addEventListener("DOMContentLoaded", function() {

    const tfgImage = document.getElementById("tfgImage");
    const tfgLink = document.getElementById("tfgLink");

    tfgImage.addEventListener("click", function() {
        window.location.href = tfgLink.href;
    });

    const f1Image = document.getElementById("f1Image");
    const f1Link = document.getElementById("f1Link");

    f1Image.addEventListener("click", function() {
        window.location.href = f1Link.href;
    });
});
