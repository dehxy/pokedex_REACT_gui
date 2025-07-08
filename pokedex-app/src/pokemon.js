import React from 'react';


const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.img} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Number: {pokemon.num}</p>
      <div className="types">
        {pokemon.type.map(type => (
          <span key={type} className="type">{type}</span>
        ))}
      </div>
      <p>Weaknesses: {pokemon.weaknesses.join(', ')}</p>
    </div>
  );
};

export default Pokemon;
