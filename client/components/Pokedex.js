import React, { Component } from 'react'
import PokemonList from './PokemonList'
import axios from 'axios'

class Pokedex extends Component{
  constructor(props){
    super(props)

    this.state = {
      pokemon: [],
      currentPageUrl:'https://pokeapi.co/api/v2/pokemon',
      nextPageUrl:'',
      prevPageUrl: '',
      loading: true
    }
  }


  componentDidMount(){
    axios.get(this.state.currentPageUrl)
    .then((res) => {
      this.setState({pokemon: res.data.results, nextPageUrl: res.data.next})

    })
  }

  onButtonNext(){
    axios.get(this.state.nextPageUrl)
    .then((res) => {
      this.setState({pokemon: res.data.results, nextPageUrl: res.data.next, prevPageUrl: res.data.previous })
    })
  }

  onButtonPrevious(){
    if(!this.state.prevPageUrl){
      return null
    }

    axios.get(this.state.prevPageUrl)
    .then((res) => {
      this.setState({pokemon: res.data.results, nextPageUrl: res.data.next, prevPageUrl: res.data.previous })

    })
  }

  render(){

    return(
      <div>
        <PokemonList pokemon={this.state.pokemon} />
        <div>
          <button onClick={this.onButtonPrevious.bind(this)} className="ui left attached button huge">Previous 20</button>
          <button onClick={this.onButtonNext.bind(this)} className="ui right attached button huge">Next 20</button>
        </div>
      </div>
    )
  }


}

export default Pokedex
