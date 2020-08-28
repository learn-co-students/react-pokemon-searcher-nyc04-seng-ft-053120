import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    searchTerm: '',
    pokemon: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then((pokemonObjArr) => {
      this.setState({
        pokemon: pokemonObjArr
      })
    })
  }

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm })
  }

  handleFormOutput = (pokemon) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(pokemon)
    })
    .then(res => res.json())
    .then((pokeObj) => {
      let newList = [...this.state.pokemon, pokeObj]
      this.setState({
        pokemon: newList
      })
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleFormOutput={this.handleFormOutput}/>
        <br />
        <Search search={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={this.state.pokemon} search={this.state.searchTerm} />
      </Container>
    )
  }
}

export default PokemonPage
