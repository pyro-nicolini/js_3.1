let cantidadSpan = document.querySelector('.cantidad')
let precioSpan = document.querySelector(".precio-inicial");
let cantidad = 0;
const precio = 400000;

precioSpan.innerHTML = precio;

let precioTotal = document.querySelector(".valor-total");

let bordeColor = document.querySelector(".img-card")

let rojo = document.querySelector(".rojo")
rojo.addEventListener("click", () => {
    bordeColor.style.borderColor = "red";
    let img = document.querySelector(".img-card")
    img.src = 'https://i.pinimg.com/736x/e7/61/f5/e761f563d53ef6994c050f0ab918266a.jpg';
})

let azul = document.querySelector(".azul")
azul.addEventListener("click", () => {
    bordeColor.style.borderColor = "blue";
    let img = document.querySelector(".img-card")
    img.src = 'https://media.s-bol.com/3G1qPAYWl6z4/2yMoRA/1200x729.jpg';
})

let yellow = document.querySelector(".yellow")
yellow.addEventListener("click", () => {
    bordeColor.style.borderColor = "yellow";
    let img = document.querySelector(".img-card")
    img.src = 'https://m.media-amazon.com/images/I/31j78K0iFaL.jpg';
});

let dark = document.querySelector(".dark")
dark.addEventListener("click", () => {
    bordeColor.style.borderColor = "black";
    let img = document.querySelector(".img-card")
    img.src = 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F12%2Fapple-files-matte-black-macbook-patent-application-info-tw.jpg?w=1080&cbr=1&q=90&fit=max';
})