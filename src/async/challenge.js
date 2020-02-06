const fetcheData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (urlApi) => {
    try {
        const data = await fetcheData(urlApi)
        const character = await fetcheData(`${API}${data.results[0].id}`);
        const origin = await fetcheData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (e) {
        console.error(e);
    }

    
}
anotherFunction(API);