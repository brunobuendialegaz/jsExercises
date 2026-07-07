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
/*
const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

let moviesMid = [];

let moviesSmall = [];

let moviesBig = [];

for (const element of movies) {
    if (element.durationInMinutes < 100) moviesSmall.push(element);
    else if (element.durationInMinutes < 200) moviesMid.push(element);
    else moviesBig.push(element);
}

console.log(moviesMid);
console.log(moviesSmall);
console.log(moviesBig); */

//Ejercicio 24
/*
const characters = [
    { name: 'Luke Skywalker', species: 'Human' },
    { name: 'Darth Vader', species: 'Human' },
    { name: 'Chewbacca', species: 'Wookiee' },
    { name: 'Leia Organa', species: 'Human' },
    { name: 'R2-D2', species: 'Droid' },
    { name: 'C-3PO', species: 'Droid' },
    { name: 'Obi-Wan Kenobi', species: 'Human' },
    { name: 'Yoda', species: 'Unknown' },
    { name: 'Han Solo', species: 'Human' }
];
const humanCharacters = [];

for (const element of characters) {
    if (element.species.includes("Human")) humanCharacters.push(element);
}

console.log(humanCharacters); */


//Ejercicio 25 
/*
const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
];

let anteriores = 0;
let posteriores = 0;

for (const element of movies) {
    if (element.releaseYear < 2000) anteriores++;
    else posteriores++;
}

console.log('Peliculas anteriores al 2000 ' + anteriores);
console.log('Peliculas posteriores al 2000 (incluido) ' + posteriores); */

//Ejercicio 26

/* const songs = [
    { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
    { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
    { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
    { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
    { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
    { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
    { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
    { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
    { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
    { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
    { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
];
let rockPlaylist = [];

rockPlaylist = songs.filter(song => song.genre.includes('Rock') && song.duration >= 5);

console.log(rockPlaylist); */

// ejercicio 27

/* const cartoons = [
    { name: 'Bugs Bunny', debut: 1938 },
    { name: 'SpongeBob SquarePants', debut: 1999 },
    { name: 'Tom and Jerry', debut: 1940 },
    { name: 'Mickey Mouse', debut: 1928 },
    { name: 'Scooby-Doo', debut: 1969 },
    { name: 'The Flintstones', debut: 1960 },
    { name: 'Batman: The Animated Series', debut: 1992 },
    { name: 'The Simpsons', debut: 1989 },
    { name: 'Pokémon', debut: 1997 },
    { name: "Dexter's Laboratory", debut: 1996 }
];


cartoons.sort((a, b) => a.debut - b.debut);

let eldestCartoon = cartoons[0].name;

console.log(eldestCartoon);

const eldestCartoon = cartoons.reduce((oldest, current) => {
    return current.debut < oldest.debut ? current : oldest;
});

console.log(eldestCartoon.name); */

// ejercicio 28
/*
const albums = [
    { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
    { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
    { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
    { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
    { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
    { title: 'Thriller', genre: 'Pop', duration: 42.19 },
    { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
    { title: 'The Wall', genre: 'Rock', duration: 81.00 },
    { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
    { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];

let totalSegundos = 0;

for (const element of albums) {
    if (element.genre.includes('Rock')) {
        const minutos = Math.trunc(element.duration);
        const segundos = Math.round((element.duration - minutos) * 100);
        totalSegundos += (minutos * 60) + segundos;
    }
}

console.log(`Duración: ${Math.trunc(totalSegundos / 60)}:${totalSegundos % 60}`)
 */

//Ejercicio 29
/*
const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
];

let decadasStarWars = {};

for (const element of starWarsMovies) {
    const decada = Math.floor(element.releaseYear / 10) * 10;
    if (!decadasStarWars[decada]) {
        decadasStarWars[decada] = [];
    }
    decadasStarWars[decada].push(element);
}

console.log(decadasStarWars); */

//Ejercicio 30

/* const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
];

let ordenGenreTracks = {};

for (const element of tracks) {
    const genre = element.genre;
    if (!ordenGenreTracks[genre]) {
        ordenGenreTracks[genre] = [];
    }
    ordenGenreTracks[element.genre].push(element);
}

console.log(ordenGenreTracks); */

//Ejercicio 31

/* const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

for (const element of artists) {
    console.log(`Artista: ${element.name}, influencias:`);
    for (const influence of element.influences) {
        console.log(influence);
    }
    console.log();
} */

//Ejercicio 32
/*
const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
];

// function findOldestXMen(listaMiembros) {
//     let miembroAntiguo;
//     for (const element of listaMiembros) {
//         if (miembroAntiguo === undefined) {
//             miembroAntiguo = element;
//         } else if (miembroAntiguo.year > element.year) {
//             miembroAntiguo = element;
//         }
//     }
//     return miembroAntiguo;
// }

const findOldestXMen = lista => lista.reduce((oldest, current) => current.year < oldest.year ? current : oldest);

console.log(miembroAntiguoPro(xMen)); */

//Ejercicio 33

/* const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};

function getCapital(country) {
    if (!capitals[country]) {
        return 'El pais no esta contemplado';
    } else {
        return capitals[country];
    }
}

console.log(getCapital('Spain'));
console.log(getCapital('Trinidad y tovago')); */

//Ejercicio 34

/* const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) {
    let total = 0;
    movies.forEach(element => {
        total += element.duration;
    });
    return total / movies.length;
}

console.log(averageMovieDuration(movies)); */

//Ejercicio 35

/* const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    const encontrado = mutants.find(element => element.power === power);
    return encontrado ? encontrado : 'No hay nadie con este poder';
}

console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'sdfasdfadsf')); */

//Ejercicio 36

/* const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
    const actoresEdad = [];
    for (const element of actors) {
        actoresEdad.push({ name: element.name, age: 2026 - element.born });
    }
    return actoresEdad;
}

console.log(calculateActorsAges(actors)); */

//Ejercicio 37
/*
const movies = [
    {
        title: "Bracula: Condemor II",
        duration: 192,
        categories: ["comedia", "aventura"],
    },
    {
        title: "Spider-Man: No Way Home",
        duration: 122,
        categories: ["aventura", "acción"],
    },
    {
        title: "The Voices",
        duration: 223,
        categories: ["comedia", "thriller"],
    },
    {
        title: "Shrek",
        duration: 111,
        categories: ["comedia", "aventura", "animación"],
    },
];

// const resumenCategorias = lista => {
//     const categorias = [];
//     for (const movie of lista) {
//         for (const category of movie.categories) {
//             if (categorias.length === 0) {
//                 categorias.push(category);
//             }
//             for (let i = 0; i < categorias.length; i++) {
//                 if (category === categorias[i]) {
//                     break;
//                 }
//                 else if (i === categorias.length - 1 && categorias[i] !== category) {
//                     categorias.push(category);
//                 }
//             }
//         }
//     }
//     return categorias;
// };

const resumenCategorias = lista => {
    const categorias = [];
    for (const movie of lista) {
        for (const category of movie.categories) {
            if (!categorias.includes(category)) {
                categorias.push(category);
            }
        }
    }
    return categorias;
};

console.log(resumenCategorias(movies)); */

//Ejercicio 38

/* const users = [
    {
        name: "Alberto",
        favoritesSounds: {
            waves: { format: "mp3", volume: 50 },
            rain: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Antonio",
        favoritesSounds: {
            waves: { format: "mp3", volume: 30 },
            shower: { format: "ogg", volume: 55 },
            train: { format: "mp3", volume: 60 },
        },
    },
    {
        name: "Santiago",
        favoritesSounds: {
            shower: { format: "mp3", volume: 50 },
            train: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Laura",
        favoritesSounds: {
            waves: { format: "mp3", volume: 67 },
            wind: { format: "ogg", volume: 35 },
            firecamp: { format: "mp3", volume: 60 },
        },
    },
];

const volumenMedio = lista => {
    const volumenes = [];
    let total = 0;
    for (const usuario of lista) {
        for (const key in usuario.favoritesSounds) {
            volumenes.push(usuario.favoritesSounds[key].volume);
        }
    }
    for (const vol of volumenes) {
        total += vol;
    }
    return total / volumenes.length;
};

console.log(volumenMedio(users)); */

/* const users = [
    {
        name: "Alberto",
        favoritesSounds: {
            waves: { format: "mp3", volume: 50 },
            rain: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Antonio",
        favoritesSounds: {
            waves: { format: "mp3", volume: 30 },
            shower: { format: "ogg", volume: 55 },
            train: { format: "mp3", volume: 60 },
        },
    },
    {
        name: "Santiago",
        favoritesSounds: {
            shower: { format: "mp3", volume: 50 },
            train: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Laura",
        favoritesSounds: {
            waves: { format: "mp3", volume: 67 },
            wind: { format: "ogg", volume: 35 },
            firecamp: { format: "mp3", volume: 60 },
        },
    },
]; */

//Ejercicio 39
/*
const users = [
    {
        name: "Alberto",
        favoritesSounds: {
            waves: { format: "mp3", volume: 50 },
            rain: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Antonio",
        favoritesSounds: {
            waves: { format: "mp3", volume: 30 },
            shower: { format: "ogg", volume: 55 },
            train: { format: "mp3", volume: 60 },
        },
    },
    {
        name: "Santiago",
        favoritesSounds: {
            shower: { format: "mp3", volume: 50 },
            train: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Laura",
        favoritesSounds: {
            waves: { format: "mp3", volume: 67 },
            wind: { format: "ogg", volume: 35 },
            firecamp: { format: "mp3", volume: 60 },
        },
    },
];

const contadorFavoritos = list => {
    const soundsCount = {};
    for (const user of list) {
        for (const key in user.favoritesSounds) {
            if (!soundsCount[key]) {
                soundsCount[key] = 1;
            } else {
                soundsCount[key] += 1;
            }
        }
    }
    return soundsCount;
};

console.log(contadorFavoritos(users)); */

//Ejercicio 40
/*
function findArrayIndex(array, text) {
    if (!array.includes(text)) return -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
}

function removeltem(array, text) {
    const arraySplice = [...array];
    const index = findArrayIndex(array, text);
    if (index === -1) return 'Palabra no encontrada';
    else {
        arraySplice.splice(index, 1);
        return arraySplice;
    }
}

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];

console.log(mainCharacters);

console.log(removeltem(mainCharacters, 'Leia'));
console.log(removeltem(mainCharacters, 'wefsvcew'));

console.log(mainCharacters); */

//Ejercicio 41

/* const rollDice = num => {
    return Math.floor((Math.random() * num) + 1);
};

console.log(rollDice(10)); */

//Ejercicio 42

/* const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
]; */

// const swap = (array, indexA, indexB) => {
//     const elementA = array[indexA];
//     const elementB = array[indexB];
//     const swapedArray = [...array];
//     swapedArray[indexA] = elementB;
//     swapedArray[indexB] = elementA;
//     return swapedArray;
// };

/* const swap = (array, indexA, indexB) => {
    const swapedArray = [...array];
    [swapedArray[indexA], swapedArray[indexB]] = [swapedArray[indexB], swapedArray[indexA]];
    return swapedArray;
};

console.log(swap(fantasticFour, 1, 3));
console.log(fantasticFour); */