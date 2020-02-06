const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (!true)
            ? setTimeout(() => resolve('Do something async'), 3000)
            : reject(new Error('Test error'));
    });
}

const doSomethingAsyncCall = async () => {
    try {

    
    const something = await doSomethingAsync();
        console.log(something);
    } catch(error) {
        console.error(error)
    }
}
console.log('before');
doSomethingAsyncCall();
console.log('after');
