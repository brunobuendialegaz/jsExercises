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

/* const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');
for (const element of countries) {
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
}
document.body.appendChild(ul);

const p = document.querySelector('.fn-remove-me');
p.remove();

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('[data-function="printHere"]');

const ul3 = document.createElement('ul');

div.appendChild(ul3);

for (const element of cars) {
    const li = document.createElement('li');
    li.textContent = element;
    ul3.appendChild(li);
}

const countries2 = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (const item of countries2) {
    const div4 = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = item.title;
    const img = document.createElement('img');
    img.src = item.imgUrl;
    div4.appendChild(h4);
    div4.appendChild(img);
    document.body.appendChild(div4);
}

const btn = document.createElement('button');
btn.textContent = 'borrar';
btn.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');
    const divsH4 = Array.from(divs).filter(div => div.querySelector('h4'));
    divsH4[divsH4.length - 1].remove();
});
document.body.appendChild(btn);


const divs = document.querySelectorAll('div');
const divsH4 = Array.from(divs).filter(div => div.querySelector('h4'));

for (const element of divsH4) {
    const btn = document.createElement('button');
    btn.textContent = 'boton div';
    btn.addEventListener('click', () => {
        element.remove();
    });
    element.appendChild(btn);
} */

// Ejercicio 4

const btn = document.createElement("button");
btn.textContent = "boton";
btn.id = "btnToClick";
btn.addEventListener("click", (event) => console.log(event.type));
document.body.appendChild(btn);

const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event) => {
  const focus = event.target.value;
  console.log(focus);
});

const inputValue = document.querySelector(".value");
inputValue.addEventListener("input", (event) => {
  console.log(event.target.value);
});

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");
document.body.appendChild(ul);

for (const element of albums) {
  const li = document.createElement("li");
  li.textContent = element;
  ul.appendChild(li);
}
