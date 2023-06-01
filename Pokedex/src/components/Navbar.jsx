function Navbar(props) {
    const {pokeCount, pokemonList, setPokeCount} = props
    
    const handleClickNext = () => {
        setPokeCount(pokeCount +1)
    };  
    
    const handleClickPrevious = () => {
          setPokeCount(pokeCount -1)
      }; 

 return (
        <>
          {pokeCount > 0 ? <button onClick={handleClickPrevious}>Previous</button> : <p></p>}
          {pokeCount< pokemonList.length - 1 ? <button onClick={handleClickNext}>Next</button> : <p></p>}
        </> 
        )
     
};


export default Navbar;
