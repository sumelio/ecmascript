
const homero = {
    name: 'Homero',
    salary: 1000,
    workers: []
}

const homero1 = {
    name: 'Homero1',
    salary: 1001,
    workers: []
}

const homero2 = {
    name: 'Homero2',
    salary: 1001,
    workers: []
}

homero.workers.push(homero1);
homero.workers.push(homero2);

const getSalary = (worker) => {
    const {  workers , salary } = worker
    return (!workers.length)
        ? salary
        : salary + workers.map((w) => getSalary(w)).reduce((a, b) => a + b);
    
}


console.log('test', getSalary(homero));




