const fetcheData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetcheData(API)
    .then(data => {
        console.log(data.info.count);
        return fetcheData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetcheData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err));