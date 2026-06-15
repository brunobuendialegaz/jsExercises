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

console.log(averageWord(mixedElements));