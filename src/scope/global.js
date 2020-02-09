var hello = 'hello var'
var hello = 'hello var 2'
let helloLet = 'hello let';
 helloLet = 'hello let 2'
const helloConst = 'Heollo const'    

const showVariables = () => {
    console.log(hello);
    console.log(helloLet);
    console.log(helloConst);
}

// showVariables();

const showGLobal = () => {
    globalVar = 'I am global';
}

//showGLobal();

// console.log(globalVar);

const showLocal = () => {
    var globalLocal = globalVar=  'I am local';
}
showLocal();
console.log(globalVar);