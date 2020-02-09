const  showConst = () => {
    const helloConst = 'I am const'
    console.log(helloConst);
}
//showConst();
//console.log(helloConst);


// Ambito lexico ::::::
var scope = 'I am global';

const showLOcal = () => {
    var scope = 'I am just a local';

    const funcLocal = () => {
        return scope;
    }
    console.log(funcLocal());
}

showLOcal();
console.log(scope);


