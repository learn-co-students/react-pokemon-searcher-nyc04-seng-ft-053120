import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchInput: ""
  }

  // FETCH POKEMONS
  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokemonArray => {
      // ADD TO STATE
      this.setState({
        pokemons: pokemonArray
      })
    })
  }

  // HANDLE SEARCH FUNCTION TO UPDATE STATE
  handleSearch = (searchInput) => {
    // console.log(searchInput)
    this.setState({
      searchInput: searchInput
    })
  }

  // ADD POKEMON TO POKEMON ARRAY
  addPokemon = (pokeFromChild) => {
    let updatedPokeArray = [...this.state.pokemons, pokeFromChild]
    // UPDATE STATE
    this.setState({
      pokemons: updatedPokeArray
     })
   }

  render() {
    // console.log(this.state.pokemons)
    // FILTER POKEMONS BASED ON SEARCH INPUT
    const filteredPokemons = this.state.pokemons.filter((poke) => {
      return poke.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemons={filteredPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage