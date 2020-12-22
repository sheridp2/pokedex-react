import React, { Component } from 'react'

class  PokemonList extends Component {
  constructor(props){
    super(props)
    this.getPokemonId = this.getPokemonId.bind(this)
    this.state = {
      urlAddOn :'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',

    }
  }

  getPokemonId(url) {
    const splitUrl = url.split("/")
    return <div><img src={`${this.state.urlAddOn}/${splitUrl[6]}.gif`}/></div>
  }
  render(){


    return(
      <div>
        {this.props.pokemon.map(p => (
          <div key={p.name}>
            <div>{p.name}</div>
            <div>{this.getPokemonId(p.url)}</div>

          </div>
        ))}
      </div>
    )
  }
}

export default PokemonList
