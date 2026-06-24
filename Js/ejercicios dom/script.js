// Ejercicio 1.1

/* const btn = document.querySelector(".showme");

console.log(btn);

const h1 = document.querySelector("#pillado");

console.log(h1);

const pList = document.querySelectorAll("p");

console.log(pList);

const pokemon = document.querySelectorAll(".pokemon");

console.log(pokemon);

const testElements = document.querySelectorAll('[data-function="testMe"]');

console.log(testElements);

const span3 = document.querySelectorAll('[data-function="testMe"]')[2];

console.log(span3); */

// Ejercicio 2

const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

const newDiv = document.createElement('div');
const newP = document.createElement('p');
newP.textContent = 'Soy un texto creado con JS';
newDiv.appendChild(newP);
document.body.appendChild(newDiv);