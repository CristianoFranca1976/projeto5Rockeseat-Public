let mouseChange = document.querySelectorAll(
  ".card1, .card2, .card3, .card4, .card5, .card6"
);

for (let i = 0; i < mouseChange.length; i++) {
  mouseChange[i].addEventListener("mouseover", shadowOn);
  mouseChange[i].addEventListener("mouseout", shadowOff);
}

function shadowOn(event) {
  this.style.border = "1px solid white";
  this.style.boxShadow = "2px 2px 50px 10px rgba(255, 255, 255, 0.685)";
}

function shadowOff(event) {
  this.style.border = "none";
  this.style.boxShadow = "none";
}

let cards = document.getElementsByClassName("card1");

function toggleEffect() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].style.border === "1px solid white") {
            cards[i].style.border = "none";
            cards[i].style.boxShadow = "none";
        } else {
            cards[i].style.border = "1px solid white";
            cards[i].style.boxShadow = "2px 2px 50px 10px rgba(255, 255, 255, 0.685)";
        }
    }
}

// Função para controlar o piscar intermitente com pausa
function blinking() {
    toggleEffect(); // Inicia o efeito de piscar

    setTimeout(() => {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.border = "none";
            cards[i].style.boxShadow = "none";
        }
    }, 500); // Pausa de 500ms antes de reverter o efeito
}

setInterval(blinking, 6000); // Intervalo total de 3 segundos (piscar + pausa)


let cards2 = document.getElementsByClassName("card2");

function toggleEffect2() {
    for (let i = 0; i < cards2.length; i++) {
        if (cards2[i].style.border === "1px solid white") {
            cards2[i].style.border = "none";
            cards2[i].style.boxShadow = "none";
        } else {
            cards2[i].style.border = "1px solid white";
            cards2[i].style.boxShadow = "2px 2px 50px 10px rgba(255, 255, 255, 0.685)";
        }
    }
}

// Função para controlar o piscar intermitente com pausa
function blinking2() {
    toggleEffect2(); // Inicia o efeito de piscar

    setTimeout(() => {
        for (let i = 0; i < cards2.length; i++) {
            cards2[i].style.border = "none";
            cards2[i].style.boxShadow = "none";
        }
    }, 500); // Pausa de 500ms antes de reverter o efeito
}

setInterval(blinking2, 7000); // Intervalo total de 3 segundos (piscar + pausa)

let cards3 = document.getElementsByClassName("card3");

function toggleEffect3() {
    for (let i = 0; i < cards3.length; i++) {
        if (cards3[i].style.border === "1px solid white") {
            cards3[i].style.border = "none";
            cards3[i].style.boxShadow = "none";
        } else {
            cards3[i].style.border = "1px solid white";
            cards3[i].style.boxShadow = "2px 2px 50px 10px rgba(255, 255, 255, 0.685)";
        }
    }
}

// Função para controlar o piscar intermitente com pausa
function blinking3() {
    toggleEffect3(); // Inicia o efeito de piscar

    setTimeout(() => {
        for (let i = 0; i < cards3.length; i++) {
            cards3[i].style.border = "none";
            cards3[i].style.boxShadow = "none";
        }
    }, 500); // Pausa de 500ms antes de reverter o efeito
}

setInterval(blinking3, 8000); // Intervalo total de

let cards4 = document.getElementsByClassName("card4");

function toggleEffect4() {
    for (let i = 0; i < cards4.length; i++) {
        if (cards4[i].style.border === "1px solid white") {
            cards4[i].style.border = "none";
            cards4[i].style.boxShadow = "none";
        } else {
            cards4[i].style.border = "1px solid white";
            cards4[i].style.boxShadow = "2px 2px 50px 10px rgba(255, 255, 255, 0.685)";
        }
    }
}

// Função para controlar o piscar intermitente com pausa
function blinking4() {
    toggleEffect4(); // Inicia o efeito de piscar

    setTimeout(() => {
        for (let i = 0; i < cards4.length; i++) {
            cards4[i].style.border = "none";
            cards4[i].style.boxShadow = "none";
        }
    }, 500); // Pausa de 500ms antes de reverter o efeito
}

setInterval(blinking4, 9000); // Intervalo total de

let cards5 = document.getElementsByClassName("card5");

function toggleEffect5() {
    for (let i = 0; i < cards5.length; i++) {
        if (cards5[i].style.border === "1px solid white") {
            cards5[i].style.border = "none";
            cards5[i].style.boxShadow = "none";
        } else {
            cards5[i].style.border = "1px solid white";
            cards5[i].style.boxShadow = "2px 2px 50px 10px rgba(255, 255, 255, 0.685)";
        }
    }
}

// Função para controlar o piscar intermitente com pausa
function blinking5() {
    toggleEffect5(); // Inicia o efeito de piscar

    setTimeout(() => {
        for (let i = 0; i < cards5.length; i++) {
            cards5[i].style.border = "none";
            cards5[i].style.boxShadow = "none";
        }
    }, 500); // Pausa de 500ms antes de reverter o efeito
}

setInterval(blinking5, 10000); // Intervalo total de

let cards6 = document.getElementsByClassName("card6");

function toggleEffect6() {
    for (let i = 0; i < cards6.length; i++) {
        if (cards6[i].style.border === "1px solid white") {
            cards6[i].style.border = "none";
            cards6[i].style.boxShadow = "none";
        } else {
            cards6[i].style.border = "1px solid white";
            cards6[i].style.boxShadow = "2px 2px 50px 10px rgba(255, 255, 255, 0.685)";
        }
    }
}

// Função para controlar o piscar intermitente com pausa
function blinking6() {
    toggleEffect6(); // Inicia o efeito de piscar

    setTimeout(() => {
        for (let i = 0; i < cards6.length; i++) {
            cards6[i].style.border = "none";
            cards6[i].style.boxShadow = "none";
        }
    }, 500); // Pausa de 500ms antes de reverter o efeito
}

setInterval(blinking6, 11000); // Intervalo total de