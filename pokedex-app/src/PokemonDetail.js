import React from 'react';


const PokemonDetail = ({ pokemon, onClose }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>

        <img src={pokemon.img} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        <p>Number: {pokemon.num}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>

        <div className="detail-types">
          {pokemon.type.map(type => (
            <span key={type} className={`type type-${type.toLowerCase()}`}>{type}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;