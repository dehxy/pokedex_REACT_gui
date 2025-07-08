import React from 'react';
import './App.css';
import Pokemon from './Pokemon';
import pokedexData from './pokedex.json';

function App() {
  return (
    <div className="App">
      <h1>My First Pokedex</h1>
      <div className="pokedex-container">
        {/* Map through the pokedexData to create a Pokemon component for each Pokémon */}
                {pokedexData.pokemon.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;