const somethingWillHappend = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Whooops!');
        }
    });
};

// somethingWillHappend()
//     .then((resp) => console.log(resp))
//     .catch(err => console.error(err));



    const somethingWillHappend2 = () => {
        return new Promise((resolve, reject) => {
            if (!true) {
                setTimeout(() => {
                    resolve('TRue');
                }, 1000)
            } else {
                
                reject(new Error('WHoppp!'));
            }
        });
    };
    
    // somethingWillHappend2()
    //     .then((resp) => console.log(resp))
    //     .then(() => console.log('hola'))
    //     .catch(err => console.error(err));
    

Promise.all([somethingWillHappend(), somethingWillHappend2()])
    .then(r => {
        console.log('Array of results', r)
    })
    .catch(err => {
        console.error(err)
    });
