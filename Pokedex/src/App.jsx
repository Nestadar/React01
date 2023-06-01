import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

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

function App() {
  

  const [pokeCount, setPokeCount] = useState(0);

  const handleClickNext = () => {
    setPokeCount(pokeCount +1)
};  

  const handleClickPrevious = () => {
      setPokeCount(pokeCount -1)
  };  

  

  return (
    <div>
      <PokemonCard pokemon = {pokemonList[pokeCount]}/>
      {pokeCount < pokemonList.length -1 ? <button onClick={handleClickNext}>Next</button> : <p></p>}
      {pokeCount > 0 ? <button onClick={handleClickPrevious}>Previous</button> : <p></p>}
    </div>
  );
}

export default App;


