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

/* const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

const newDiv = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const newP = document.createElement('p');
    newP.textContent = 'Soy un texto creado con JS ' + (i + 1);
    newDiv.appendChild(newP);
}
document.body.appendChild(newDiv);

const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy Dinamico!';

newDiv.appendChild(pDinamico);

const h2 = document.body.querySelector('h2');
h2.textContent = 'Wubba Lubba dub dub';

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const divUl = document.createElement('div');
const ul = document.createElement('ul');
divUl.appendChild(ul);
for (const element of apps) {
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
}

document.body.appendChild(divUl);

const nodesToRemove = document.querySelectorAll('.fn-remove-me');
nodesToRemove.forEach(node => node.remove());

const allDivs = document.querySelectorAll('div');
const pInBetween = document.createElement('p');
pInBetween.textContent = 'Voy en medio';

document.body.insertBefore(pInBetween, allDivs[1]);

const divsInsert = document.querySelectorAll('div.fn-insert-here');

divsInsert.forEach(div => {
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';
    div.appendChild(p);
}); */

// Ejercicio 3

