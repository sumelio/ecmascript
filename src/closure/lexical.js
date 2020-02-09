const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };

    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myCount11 = buildCount(111);
myCount11();
myCount11();
myCount11();


const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
console.log(newPerson.setName('test'));
console.log(newPerson.getName());