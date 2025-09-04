
const baseURL = 'https://pokeapi.co/api/v2/';

async function GetPokemonByName(pokemonName) {

    const pokeName = pokemonName;
    const endpoint = `${baseURL}pokemon/${pokeName}`;
 
    try {
        const response = await fetch(endpoint);
       let name = '';
        if(response.ok){
            const jsonRes = await response.json();
            //console.log(jsonRes);
           name = jsonRes.name;
           //console.log(name);
            ExtractValues(name);
           
        }
        return name;
        

    } catch (error) {
        console.log(error);
    }
    
   
};
const finalName = GetPokemonByName()
export {GetPokemonByName , finalName};
