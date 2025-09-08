import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fontsource/roboto/500.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import HeaderDefault from './components/Header';
import DisplayCard from './components/displayCard';
import SearchBarContainer from './containers/SearchBarContainer';
import DisplayFooter from './components/Footer';

//todo : error handling if not found and lazy load

function App() {
  
  const baseURL = "https://pokeapi.co/api/v2/";
  const [pokeObj,setPokeObj] = useState({});
  const [display,setDisplay] = useState(false);
  const [damageRelation,setDamageRelation] = useState([]);

   const addPokeObj = (obj) =>  {
    //addNewTypeArray(obj)
    setPokeObj(obj);

    if(obj != {} ) {
      setDisplay(true);
    }

  }

  const addDamageRelation = (damage) => {
    setDamageRelation(damage)
  

  }

  const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
        
        border:'none',
        boxShadow:'none',
        backgroundColor:'#FEE8B6',
    
}));
  //console.log(display)
  //console.log(damageRelation);

  return (
    <>
     <Box sx={{ width: '100%' }}>
      <Stack 
      spacing={0}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      <Item>
          <header>
            <HeaderDefault title='Search Your Pokemon!'/>
          </header>
      </Item>
      <main>
        <Item> 
           <SearchBarContainer addPokeObj={addPokeObj} addDamageRelation={addDamageRelation}/>
        </Item>
        { display === true && <Item>
            <DisplayCard pokeObject = {pokeObj} damage={damageRelation}/>
        </Item>}
      </main>
      </Stack>
    </Box> 
    
   
    {display === true && <footer>
      <DisplayFooter />

    </footer>}
      

        

    
   
      
    </>
  )
}

export default App
