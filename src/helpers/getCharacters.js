import axios from 'axios'

async function getCharacters(url){
    return await axios.get(url)
}

export default getCharacters;