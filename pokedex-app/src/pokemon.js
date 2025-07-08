import React from 'react';

const Pokemon = ({ pokemon, onPokemonClick }) => {
  return (
    <div className="pokemon-card" onClick={() => onPokemonClick(pokemon)}>
      <img src={pokemon.img} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Number: {pokemon.num}</p>
      <div className="types">
        {pokemon.type.map(type => (
          <span key={type} className={`type type-${type.toLowerCase()}`}>{type}</span>
        ))}
      </div>
      <div className="weaknesses">
        <p>Weaknesses:</p>
        <div className="weakness-list">
          {pokemon.weaknesses.map(weakness => (
            <span key={weakness} className={`type type-${weakness.toLowerCase()}`}>{weakness}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;