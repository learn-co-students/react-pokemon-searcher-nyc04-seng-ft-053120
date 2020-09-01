import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    search:"",
    pokemon:[]
  }

  componentDidMount() {
      fetch ("http://localhost:3000/pokemon")
        .then (resp => resp.json())
        .then ((pokemon) => {
          this.setState({
            pokemon:pokemon
          })
        })

  }
  newPokemonForm = (newPokemon) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      header:{
        "content-type": "application/json"
      },//end of header
      body: JSON.stringify(newPokemon)
    }) //end of fetch 2nd arguement
    .then(resp => resp.json())
    .then(newPokemonObj => {
      let newPokemonList = [newPokemonObj, ...this.state.pokemon]
      this.setState({
        pokemon:newPokemonList
      })//end of setState
    })//end of .then pokemonObj
  }//end of newPokemonForm


  pokemonSearch = (event) => {
    let searchTerm = event.target.value
    this.setState({
      search: searchTerm
    })
  }


  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemonForm ={this.newPokemonForm}/>
        <br />
        <Search pokemonSearch={this.pokemonSearch}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemon} pokemonSearch={this.state.search} />
      </Container>
    )
  }
}

export default PokemonPage
