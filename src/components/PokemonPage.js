import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state ={
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount(){
    this.getPokemons()
  }

  getPokemons() {
    fetch("http://localhost:3003/pokemon?_limit=20")
    .then(response => response.json())
    .then(pokemonData => {
      this.setState({
        pokemons: pokemonData
      })
    })
  }

  handleSearchChange = searchTermString => {
    this.setState({
      searchTerm: searchTermString
    })
  }

  addOnePokemon = (newPokemon) => {
    let pokemonArr = [...this.state.pokemons, newPokemon]
    this.setState({
      pokemons: pokemonArr
    })
  }

  render() {
    let filteredPokemons = this.state.pokemons.filter(poke => {
      return poke.name.includes(this.state.searchTerm)
    })

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addOnePokemon={this.addOnePokemon}/>
        <br />
        <Search searchTerm={this.searchTerm} handleSearchChange={this.handleSearchChange}/>
        <br />
        <PokemonCollection pokemons={filteredPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
