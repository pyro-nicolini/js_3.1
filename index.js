let cantidadSpan = document.querySelector('.cantidad')
let precioSpan = document.querySelector(".precio-inicial");
let cantidad = 0;
const precio = 400000;

precioSpan.innerHTML = precio;

let precioTotal = document.querySelector(".valor-total");

let btnRed = document.querySelector(".red")
btnRed.addEventListener("click", () => {
    let bgCard = document.querySelector(".card")
    bgCard.style.backgroundColor = "#ff3939";
    let img = document.querySelector(".img-card")
    img.src = 'https://www.amd.com/content/dam/amd/en/images/products/graphics/1913654-radeon-rx-7000-series-graphics-cards.jpg';
})

let btnGreen = document.querySelector(".green")
btnGreen.addEventListener("click", () => {
    let bgCard = document.querySelector(".card")
    bgCard.style.backgroundColor = "#007d0c";
    let img = document.querySelector(".img-card")
    img.src = 'https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2668300-amd-ryzen-ai.jpg';
})



let btnOrange = document.querySelector(".orange")
btnOrange.addEventListener("click", () => {
    let bgCard = document.querySelector(".card")
    bgCard.style.backgroundColor = "#ff3300";
    let img = document.querySelector(".img-card")
    img.src = 'https://www.amd.com/content/dam/amd/en/images/pr/embedded-1.jpg';
});



let btnDark = document.querySelector(".dark")
btnDark.addEventListener("click", () => {
    let bgCard = document.querySelector(".card")
    bgCard.style.backgroundColor = "#080808";
    let img = document.querySelector(".img-card")
    img.src = 'https://www.amd.com/content/dam/amd/en/images/pr/corporate-3.jpg';
})