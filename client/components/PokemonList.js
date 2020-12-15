import React from 'react'

const PokemonList = ({ pokemon }) => {
  return(
    <div>
      {pokemon.map(p => (
        <div key={p.name}>
          <div>{p.name}</div>

        </div>
      ))}
    </div>
  )
}

export default PokemonList
