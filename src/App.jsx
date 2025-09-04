import { useState } from 'react'
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


function App() {

  const [pokeObj,setPokeObj] = useState({});
  const [display,setDisplay] = useState(false);

  //let newType = [];

   const addPokeObj = (obj) =>  {
    //addNewTypeArray(obj)
    setPokeObj(obj);

    if(obj != {} ) {
      setDisplay(true);
    }
    

  }

  /*const addNewTypeArray = (obj) => {
    let renderObj = obj
    console.log(renderObj)
    for(let i = 0; i<renderObj['types'].length;i++){
      newType.push(renderObj['types'][i]);
      console.log(renderObj['types'][i]['type']['name'])
    }
  } */
  //console.log(newType)
  //console.log(pokeObj['types'][0]['type']['name']);

  const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
        
        border:'none',
        boxShadow:'none',
        backgroundColor:'#FEE8B6',
    
}));
  console.log(display)


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
           <SearchBarContainer addPokeObj={addPokeObj}/>
        </Item>
        { display === true && <Item>
            <DisplayCard pokeObject = {pokeObj}/>
        </Item>}
      </main>
      </Stack>
    </Box> 
    
   
    <footer>

    </footer>
      

        

    
   
      
    </>
  )
}

export default App
