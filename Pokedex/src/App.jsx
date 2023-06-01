import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import Navbar from './components/Navbar';



function App() {

  const [pokeCount, setPokeCount] = useState(0);

  

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  return (
    <div>
      <PokemonCard pokemon = {pokemonList[pokeCount]}/>
      <Navbar 
       pokeCount = {pokeCount}
       setPokeCount = {setPokeCount}
      //  handleClickPrevious = {handleClickPrevious}
      //  handleClickNext = {handleClickNext}
       pokemonList= {pokemonList}/>
    </div>
  );
}

export default App;


