import React, { useState } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import PokemonDetail from './PokemonDetail';
import pokedexData from './pokedex.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const handleSearchChange = (event) => {setSearchTerm(event.target.value)};
  const handlePokemonClick = (pokemon) => {setSelectedPokemon(pokemon)};
  const handleCloseDetail = () => {setSelectedPokemon(null)};
  const filteredPokemon = pokedexData.pokemon.filter(pokemon =>pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <h1>My First Pokedex</h1>
      <input
        type="text"
        placeholder="Search for a Pokémon..."
        className="search-bar"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="pokedex-container">
        {filteredPokemon.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} onPokemonClick={handlePokemonClick} />
        ))}
      </div>
      <PokemonDetail pokemon={selectedPokemon} onClose={handleCloseDetail} />
    </div>
  );
}

export default App;