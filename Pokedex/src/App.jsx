import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import Navbar from './components/Navbar';
import { useEffect } from 'react';



function App() {
  
  const [selectedPokemon, setSelectedPokemon] = useState(null);

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
      <Navbar 
      pokemonList = {pokemonList}
      selectedPokemon = {selectedPokemon}
      setSelectedPokemon = {setSelectedPokemon}
      />
      
    </div>
  );
}

export default App;


