

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
        : salary + getSalaryFromWorkers(workers);
    
}

const getSalaryFromWorkers = (workers) => {
    let total = 0;
    workers.map((w) => { total += getSalary(w);})
    return  total;
}

console.log('test', getSalary(homero));