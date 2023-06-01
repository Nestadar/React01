function Navbar(props) {
  const {pokemonList, selectedPokemon, setSelectedPokemon} = props;
  

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handlePokemonClick(pokemon)}>
          {pokemon.name}
        </button>
      ))}
      {selectedPokemon && (
        <div>
          <h3>{selectedPokemon.name}</h3>
          <img src={selectedPokemon.imgSrc} alt={selectedPokemon.name} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
