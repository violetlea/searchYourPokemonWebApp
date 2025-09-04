import SearchComp from "../components/Search";
import ButtonDef from "../components/Button";
import { useState } from "react";
import ErrorAlert from "../components/ErrorAlert";




export default function SearchBarContainer (props) {
    //buat props for action/setState/func

    
    const [text,setText]= useState('');
    const [error,setError] = useState(false)
    const [pokeType,setPokeType] = useState({});
    const baseURL = 'https://pokeapi.co/api/v2/';
    let pokeObj = {};
  
    


    const handleTextChange = (event) => {
        setText(event.target.value);
    }
    const GetPokemonByName = async (pokemonName) => {

        const pokeName = pokemonName;
        const endpoint = `${baseURL}pokemon/${pokeName}`;
        
 
        try {
            const response = await fetch(endpoint);
            let name = '';
            if(response.ok){
                const jsonRes = await response.json();
                //console.log(jsonRes.species);
                pokeObj = jsonRes;
               // name = jsonRes.name;
                console.log(pokeObj)
        
                
                const objs = {
                    name : pokeObj.name,
                    types: pokeObj.types,
                    weight: pokeObj.weight,
                    height: pokeObj.height,
                    imageOfficial: pokeObj['sprites']['other']['official-artwork']['front_default'],    
                    imageOfficialShiny:  pokeObj['sprites']['other']['official-artwork']['front_shiny'],
                    cries: pokeObj.cries.latest, 
                };
             
                props.addPokeObj(objs);
            }
            
        } catch (error) {
            console.log(error);
        }

    }


    const handleSubmit = (event) => {

        event.preventDefault();
        //alert(text);
       
        
        if(text.length > 0) {
            GetPokemonByName(text);
         

        } else {
            setError(true);
        }
        

    }
    /*const Item = styled(Paper)(({ theme }) => ({

        padding: theme.spacing(1),
        textAlign: 'center',
        border:'none',
        boxShadow:'none',
        backgroundColor:'#FEE8B6'

    })); */


    return (
        <>
        <form onSubmit={handleSubmit}>
            <SearchComp 
            label='Search for pokemon' 
            value={text} 
            handleTextOnChange={handleTextChange}
            />
            <br/>
            <ButtonDef text='Search!' />
        </form>

        {error === true &&  <ErrorAlert alertMssg='Please insert a pokemon name'/>}


      
        
            
        </>
    );
}