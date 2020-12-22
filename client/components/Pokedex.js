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
        <PokemonList pokemon={this.state.pokemon}/>
        <button onClick={this.onButtonPrevious.bind(this)}>Previous 20</button>
        <button onClick={this.onButtonNext.bind(this)}>Next 20</button>
      </div>
    )
  }


}

export default Pokedex
