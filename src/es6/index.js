
function newFunction(name, age, country) {
    var name = name || 'Value';
    var age = age || 12;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

// es6

function newFunctionEs6(name = 'Fredito', age = 33, country = 'Colombia') {
    console.log(name, age, country);
}

newFunctionEs6()
newFunctionEs6('Pepito', 12, 'Brzil')


let hello = "Hello";
let world = "World"
let epicPhase = hello + ' ' + world;
console.log(epicPhase);

let epicPhraseEs6 = `${hello} ${world}`
console.log(epicPhraseEs6);

let phraseMultiline = "This is a multi lines for learning \n" 
    + " ecmascript 6";
 
let phraseMultilineEs6 = `This is a multi lines for learning
ecmascript 6`;

console.log(phraseMultiline)
console.log(phraseMultilineEs6)


let person = {
    'name': 'Chavo',
    'age': 8,
    'country': 'Mexico'
}

let { name, age, country } = person;
console.log(name, age, country)


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2];

console.log(education)



let name = 'Bob Marlyn'
let age = 21;

let bob = { name, age };
console.log(bob);

const names = [
    { name: 'John Lenon', age: 22 },
    { name: 'Violeta Parra', age: 32 }
];

let listOfHames = names.map(
    function ({ name, age }) {
        console.log(name, age);
    }
);

let listOfHamesEs6 = names.map(
    ({ name, age }) => console.log(name, age)
);

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
           resolve('Hey !')
        } else {
            reject('Uppp!!!')
       }
    }); 
}

helloPromise()
    .then(resp => console.log(resp))
    .then(() => console.log('hi'))
    .catch(error => console.error(error));


class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}    

const calc = new Calculator();
console.log(calc.sum(2, 4))

import { hello } from './module';
console.log(hello());


function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatoHello = helloWorld();

console.log(generatoHello.next().value);
console.log(generatoHello.next().value);
console.log(generatoHello.next().value);