import React from 'react';

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.img} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Number: {pokemon.num}</p>
      <div className="types">
        {pokemon.type.map(type => (
          //new class here to style the types, converting to lowercase for a consistent class name
          <span key={type} className={`type type-${type.toLowerCase()}`}>{type}</span>
        ))}
      </div>

        <div className="weaknesses">
        <p>Weaknesses:</p>
        <div className="weakness-list">
          {
            // loops through each weakness just like pokemon types.
            // Each weakness should get its own <span> with a class based on its type.
            pokemon.weaknesses.map(weakness => (
              <span key={weakness} className={`type type-${weakness.toLowerCase()}`}>{weakness}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Pokemon;