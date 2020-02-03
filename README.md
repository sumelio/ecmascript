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

* Async and Await
```javascript
//=> async await
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (false)
        ? setTimeout(()=> resolve('Hello Juan Carlos'), 3000)
        : reject(new Error('Test Error'))
    });
}
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync()

// asi se ejecuta correctamente una promesa 
const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}
anotherFunction()
```

## ES9

* Spread operator not incluide atributes
```javascript
/**
 * Spread Operator
 */
const obj = {
  name: 'Oscar',
  age: 32,
  country: 'MX'
};

let { name, ...addInfo } = obj;
console.log(`name: ${name}`);
console.log(`additional information: `, addInfo);

let { country, ...nameAndAge } = obj;
console.log(`name and age: `, nameAndAge);
```

 * Porpagation Properties
 ```javascript
const person = {
  name: 'Oscar',
  age: 32
};

const personInformation = {
  ...person,
  country: 'MX'
};
console.log(`personInformation: `, personInformation);
```

 * Promise Finally

```javascript
const helloWorld = () => {
  returnnew Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Hello World!');
        }, 3000)
      : reject(newError('Test Error'));
  });
};

helloWorld()
  .then(result => console.log('result -> ', result))
  .catch(err => console.log('err -> ', err))
  .finally(() => console.log('finalizó'));
```

 * Regex
```javascript
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);
```
## ES10

* Array flat
```javascript
let list = [1, 2, 3, [1, 2, 3, [1, 2, 3,]]]
console.log(list);
console.log(list.flat());
console.log(list.flat(2));
```

* Array map
```javascript
var arr1 = [1, 2, 3, 4];
arr1.map(x => [x * 2]);
arr1.flatMap(x => [x * 2]);
```

* Trim string
```javascript
let string = '      HELLO';
console.log(string.trimStart());

let string2 = 'HELLO      ';
console.log(string2.trimEnd());
```


* Try and catch without error declaration
```javascript
// es7
try { }
catch (error) { console.log(error) }
// es10
try { }
catch { console.log(error) }

```
* Entries to objects
```javascript
let entries = [['nombre', 'jesus'], ['edad', 22]]
obj = Object.fromEntries(entries)
console.log(entries)
console.log(obj)
```
* Symbol description

```javascript
let s = Symbol('Esta es la descripcion del simbolo')
console.log(s.description);
```
