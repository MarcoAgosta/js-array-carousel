const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

const sliderImgEl = document.getElementById("foto");
const btnUp = document.getElementById("button-up");
const btnDown = document.getElementById("button-down");

const ultimoIndiceDisponibile = images.length-1;

let currentImgIndex = 0;

sliderImgEl.src = images [ currentImgIndex ];

btnUp.addEventListener("click", function() {

    currentImgIndex++;

    if (currentImgIndex === ultimoIndiceDisponibile+1){

        currentImgIndex = 0

    }

    sliderImgEl.src = images [ currentImgIndex ]

} )

btnDown.addEventListener("click", function() {

    currentImgIndex--;

    if (currentImgIndex === -1){

        currentImgIndex = ultimoIndiceDisponibile

    }

    sliderImgEl.src = images [ currentImgIndex ]

} )