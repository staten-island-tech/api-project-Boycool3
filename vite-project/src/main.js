import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: '89d7b4f6-efe8-4508-b944-a31e45ad6054'})
const URL = "https://api.pokemontcg.io/v2/sets?page=1"

async function getData(URL){
    try {
        const response = await fetch(URL)
        if (response.status != 200){
            throw new Error(response);
        }
        else{
            const data = await response.json();
            console.log(data)
        }
    } catch (error) {
        console.log(error);
    }
}
getData(URL);