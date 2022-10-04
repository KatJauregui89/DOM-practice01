
/* 
    // DOM / Document Object Model
    Abstracción del documento HTML

    NODO
    -Elementos
    -Textos
    -Atributos
    -Comentarios

*/

// Buscar dentro del DOM
// document --> representa al documento HTML

// Etiqueta
// document.getElementByTagName("etiqueta")
// Valor de retorno siempre es un HTMLCollection

const paragraphs = document.getElementsByTagName("p")
console.log(paragraphs[0].innerHTML);

paragraphs[0].innerHTML = "Este es un nuevo texto generado en JS"

const titleChange = document.getElementsByTagName("h1")[0]
titleChange.innerHTML = "Katia Jauregui"

console.log(titleChange);

// Busqueda por clase
// document.getElementsByClassName("className")
const text = document.getElementsByClassName("texto")
console.log(text);

// Busqueda por Identidicador (ID)
// document.getElementbyID("identificador")

const img = document.getElementById("imagen-gato")
console.log(img.src);

img.src = "https://picsum.photos/id/237/200/300"

// Busqueda a partir de un selector
// Document.querySelector("Selector")
// Trae la primera coincidencia

const firstParagraph = document.querySelector("p")
console.log(firstParagraph);

const doubleSelector = document.querySelector("p.texto")
console.log(doubleSelector);

//Busqueda de TODOS los elementos a partir de un selector
// document.querySelectorAll("selector")
// Devuelve una NodeList con todos los elementos que coincidan con el selector 

const paragraphsAndText = document.querySelectorAll("p.texto")
console.log(paragraphsAndText);

// Estilos
// In-line:
titleChange.style = "font-size: 3rem; color: darkcyan"

// classList
// elemento.classList --> ["clase1", "clase2"] nos devuelve todas las clases que tiene el elemento
// Agregando una clase al elemento

// elemento.classList.add("nuevaClase")
firstParagraph.classList.add("texto-rojo")

// Acciones que puede llevar a cabo un usuario --> eventos (cualquier cosa que pueda ocurrir dentro del navegador)

let contadorClicks = 0
const h2 = document.querySelector("h2")
const cheems = document.getElementById("cheems-normal")
// const contenedorCheems = document.getElementsByID("contenedor-cheems")

function funcionAEjecutar(){
    contadorClicks++

    if (contadorClicks >= 10 ){
        cheems.src = "./assets/img/cheems-ansioso.JPG"
        h2.innerText = "Esos son muchos click, me da amsiedad";
        cheems.classList.add("contenedor-rojo")
        // contenedorCheems.classList.add("contenedor-rojo");
    } else {
        console.log(`Click num ${contadorClicks}`);
        h2.innerText = `Click num ${contadorClicks}`;
    }
}

// ACTIVIDAD
/* 
    -> Mostrar la imagen de cheems happy como parte del diseño
    -> Cuando el contador de clicks llegue a 10 cambiar el texto a "Esos son muchos clicks, me da amsiedad"
    -> Cambiar la imagen de cheems happy por la de cheems con amsiedad
    -> Cambiar el color del contenedor a rojo 
*/

// let contadorClicksCheems = 0
// const cheems = document.getElementById("cheems-normal")

// function cambioCheems(){
//     contadorClicks++
//     if (contadorClicks >= 10 ){
//         cheems.src = "./assets/img/cheems-ansioso.jpeg"
//         h2.innerText = "Esos son muchos click, me da amsiedad";
//     }
// }