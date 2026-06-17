// ejercicio 1
/*
let miSuperheroeFavorito = "Hulk";

let miNumeroFavorito = 50;

let altura = 5;

let longitug = 10;

let suma = altura + longitug;

console.log(miSuperheroeFavorito)

console.log(miNumeroFavorito)

console.log(altura)

console.log(longitug)

console.log(suma)



// ejercicio 2

const jedi = {nombre: "Luke Skywalker", edad: 25}

let nombre = "leia";

let apellido = "Organa";

let edad = 20;

console.log("Soy " + nombre + " " + apellido + " tengo " + edad + " años y soy una princesa de Alderaan")

*/

// ejercicio 2

/*

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};


let precioTotal = sable1.precio + sable2.precio;

console.log("El precio total son " + precioTotal + "$.")

*/

// ejercicio 2

/*

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

precioBaseGlobal = 25000;

console.log(precioBaseGlobal);

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

console.log(nave1.precioFinal);
console.log(nave2.precioFinal);

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;

nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1.precioFinal);
console.log(nave2.precioFinal);

*/

//Ejercicio 3

/*

console.log(10*5);
console.log(10/2);
console.log(15%9);

const p = 10;
const j = 5;
let o = p + j;

console.log(o);

const c = 10;
const m = 5;
let i = c * m;

console.log(i)

*/

//Ejercicio 4

/*
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]);

aldeanos.push("cervasio");

console.log(aldeanos[5]);

aldeanos[0] = "Bambina";

console.log(aldeanos[0]);

aldeanos.reverse();

for (const aldeano of aldeanos) {
    console.log(aldeano);
};

let indice = aldeanos.indexOf("Narciso");

aldeanos.splice(indice, 1, "Canela");

console.log(aldeanos);

console.log(aldeanos[aldeanos.length - 1])

*/

//Ejercicio 5

/*

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if ((number2 / number1) == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}


if (number1!==number2) {
    console.log("number1 es estrictamente distinto a number2");
}

if (number3!=number1) {
  console.log("number3 es distinto number1");
}

if (number3*5==number1) {
    console.log("number3 por 5 es igual a number1");
}

if (number3*5==number1 && number1*2==number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2==number1||number1/5==number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
 */

//Ejercicio 6

/*
for (let i = 0; i <= 9; i++) {
    console.log(i);
}


for (let i = 0; i <= 9; i++) {

if (i % 2 == 0) {
    console.log(i);
}
}

for (let i = 0; i < 10; i++) {
    if (i < 9) {
        console.log("Intentando dormir 🐑");
    } else {
        console.log("¡Dormido!");
}
}

*/

//Ejercicio 7

/* function greaterNumber(numberOne, numberTwo) {
    let numeros = [numberOne, numberTwo];
    numeros.sort((a, b) => a - b);
    console.log(numeros[numeros.length - 1]);
}

const greaterNumber2 = (numberOne, numberTwo) => {
    console.log(Math.max(numberOne, numberTwo));
};

greaterNumber(1924, 123333);
greaterNumber2(109283, 3215312); */

// ejercicio 8
/*
const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];

function findLongestWord(stringList) {
    let longest = " ";
    for (const string of stringList) {
        if (string.length > longest.length) {
            longest = string;
        }
    }
    console.log(longest);
}

findLongestWord(avengers); */

//Ejercicio 9

/* const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let total = 0;
    for (const num of numberList) {
        total += num;
    }
    return total;
}

console.log(sumNumbers(numbers)); */

//Ejercicio 10
/*
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    let total = 0;
    for (const num of numberList) {
        total += num;
    }
    return total / numberList.length;
}

console.log(average(numbers));
 */

//Ejercicio 11
/* 
const mixedElements = [
    6,
    1,
    "Marvel",
    1,
    "hamburguesa",
    "10",
    "Prometeo",
    8,
    "Hola mundo",
];
function averageWord(list) {
    let total = 0;
    for (const element of list) {
        if (typeof element === "number") {
            total += element;
        } else {
            total += element.length;
        }
    }
    return total / list.length;
}

console.log(averageWord(mixedElements)); */

//Ejercicio 12
/* 
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(list) {
    let newArray;
    for (const element of list)
        if (newArray === undefined) { newArray = [element]; }
        else {
            for (let i = 0; i < newArray.length; i++) {
                if (element !== newArray[i] && i == newArray.length - 1) newArray.push(element);
                else if (element === newArray[i]) break;
                else continue;
            }
        }
    return newArray;
}


console.log(duplicates);
console.log(removeDuplicates(duplicates)); */

//Ejercicio 13

/* const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
function nameFinder(nameList, searchName) {
    for (let i = 0; i < nameList.length; i++) {
        if (searchName === nameList[i]) return [true, i];
    }
    return false;
}

console.log(nameFinder(names, 'Tony'));
console.log(nameFinder(names, ' sadfasdf')); */

// Ejercicio 14

/* const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];
const existePalabra = (list, word) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].palabra === word) return [true, i];
    }
    return [false];
};

function repeatCounter(list) {
    let palabras = [];
    for (let i = 0; i < list.length; i++) {
        const existe = existePalabra(palabras, list[i]);
        if (existe[0]) {
            palabras[existe[1]].repeticiones += 1;
        } else {
            palabras.push({ palabra: list[i], repeticiones: 1 });
        }
    }
    return palabras;
}

console.log(repeatCounter(words));
 */

//Ejercicio 15

/* const products = [
    "Camiseta de Metallica",
    "Pantalón vaquero",
    "Gorra de beisbol",
    "Camiseta de Basket",
    "Cinturón de Orión",
    "AC/DC Camiseta",
];

for (const element of products) {
    if (element.includes("Camiseta")) console.log(element);
} */

//Ejercicio 16

/* const placesToTravel = [
    "Japon",
    "Venecia",
    "Murcia",
    "Santander",
    "Filipinas",
    "Madagascar",
];

for (const element of placesToTravel) {
    console.log(element);
} */

//Ejercicio 17

/* const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const key in alien) {
    console.log(`La propiedad ${key} tiene como valor: ${alien[key]}`);
} */

//Ejercicio 18

/* const placesToTravel = [
    { id: 5, name: "Japan" },
    { id: 11, name: "Venecia" },
    { id: 23, name: "Murcia" },
    { id: 40, name: "Santander" },
    { id: 44, name: "Filipinas" },
    { id: 59, name: "Madagascar" },
];

for (let i = 0; i < placesToTravel.length; i++) {
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i, 1);
    }
}

console.log(placesToTravel); */

//Ejercicio 19

/* const toys = [
    { id: 5, name: 'Transformers' },
    { id: 11, name: 'LEGO' },
    { id: 23, name: 'Hot Wheels' },
    { id: 40, name: 'Rascador de gato' },
    { id: 40, name: 'FurReal Friends gato interactivo' },
    { id: 60, name: 'Nerf Blaster' },
    { id: 71, name: 'Sylvanian Families - Familia gato' }
];

let toysNoGato = [];
for (const element of toys) {
    if (!element.name.includes('gato')) {
        toysNoGato.push(element);
    }
}

console.log(toysNoGato); */

//Ejercicio 20

/* const popularToys = [];

const toys = [
    { id: 101, name: 'Super Soaker', sellCount: 15 },
    { id: 102, name: 'Tamagotchi', sellCount: 22 },
    { id: 103, name: 'Polly Pocket', sellCount: 8 },
    { id: 104, name: 'Yo-yo', sellCount: 33 },
    { id: 105, name: 'Pikachu plush toy', sellCount: 19 },
    { id: 106, name: "Rubik's Cube", sellCount: 27 },
    { id: 107, name: 'Fidget Spinner', sellCount: 12 },
    { id: 108, name: 'Slinky', sellCount: 5 },
    { id: 109, name: 'Magic 8-Ball', sellCount: 38 },
    { id: 110, name: 'Troll Doll', sellCount: 20 }
];

for (const element of toys) {
    if (element.sellCount > 15) {
        popularToys.push(element);
    }
}

console.log(popularToys); */

//ejercicio 21

/* const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 }
];

for (let i = 0; i < users.length; i++) {
    if (i === 0) {
        console.log("Usuarios menores de edad");
    }
    if (users[i].years < 18) {
        console.log(users[i]);
    }
}

for (let i = 0; i < users.length; i++) {
    if (i === 0) {
        console.log("Usuarios mayores de edad");
    }
    if (users[i].years >= 18) {
        console.log(users[i]);
    }
} */

//Ejercicio 22

/* const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    foodSchedule.splice(i, 1);
    foodSchedule.push({ name: fruits[0], isVegan: true });
    fruits.splice(0, 1);
  }
}

console.log(foodSchedule);

console.log(); */

//Ejercicio 23
