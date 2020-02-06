let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (urlApi, callBack) => {

    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        const activeAsync = true;
        xhttp.open('GET', urlApi, activeAsync);
        xhttp.onreadystatechange = ((event) => {
            /**
             * 0: request not initialized
                1: server connection established
                2: request received
                3: processing request
                4: request finished and response is ready
             */
            const requestFinishedandResponseIsReady = 4;
            if (xhttp.readyState === requestFinishedandResponseIsReady) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error(`Oucch error with ${urlApi}`))
                
            }
        });
        xhttp.send();
    });

    
}

module.exports = fetchData;