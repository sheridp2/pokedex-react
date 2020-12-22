import React, { Component } from 'react'


class  PokemonList extends Component {
  constructor(props){
    super(props)
    this.getPokemonId = this.getPokemonId.bind(this)
    this.state = {
      urlAddOn :'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',

    }
  }

  getPokemonId(pokemon) {
    const splitUrl = pokemon.url.split("/")
    return(
      <div className="ui link card">
        <div className="ui segement" >
          <img src={`${this.state.urlAddOn}/${splitUrl[6]}.gif`} className="ui centered small image"/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
          <div className="description">ID: {splitUrl[6]}</div>

        </div>
      </div>
    )
  }
  render(){


    return(
      <div className="ui centered grid">
        {this.props.pokemon.map(p => (
          <div key={p.name} >

            {this.getPokemonId(p)}

          </div>
        ))}
      </div>
    )
  }
}

export default PokemonList
