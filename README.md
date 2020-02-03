# ecmascript

##  ES6
* Default params
* Spread operator
```javascript
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2];
```

* Template
* Promise
```javascript
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
```    
* Destructuring assignment
* Arrow Function
* Export modules
```javascript
const hello = () => {
    return 'hello!'
}

export default hello;
.....
import { hello } from './module';
```
*  Generators

```javascript
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
```


## ES7
- includes for number array
```javascript
let numbers = [1, 2, 3, 7, 8];
if (numbers.includes(7)) {
    console.log('SI hay 7')
} else {
    console.log('No hay 7')
}
```

-  Elevar a la potencia
```javascript
   let result = base ** exponent;
```


## ES8
* Object convert to array
```javascript
const data = {
    frontend: 'Frontier',
    backend: 'Backenita',
    design: 'Designesita'
}

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)

const keys = Object.keys(data);
console.log(keys)
const values = Object.values(data);
console.log(values)}
```
* Pad
```javascript
const strings = 'he';
console.log(strings.padStart(7, 'HI'))
console.log(strings.padEnd(12, '-'))
```
