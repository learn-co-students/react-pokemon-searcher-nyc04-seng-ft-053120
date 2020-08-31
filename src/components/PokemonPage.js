import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    search: "",
    pokemons: []
  }

  //fetches Array of objects and sets them into state
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemonsArr => {
        this.setState({
        pokemons: pokemonsArr
      })
    })
  }

  handleSearch = (evt) => {
      this.setState({
        search: evt.target.value
      },()=>{console.log(this.state.search)})
  }

  newSubmit = (newPokemon) => {
    const newArr = [...this.state.pokemons, newPokemon]
  console.log(newArr)
    this.setState({
      pokemons: newArr
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newSubmit = {this.newSubmit}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection search = {this.state.search} pokemons = {this.state.pokemons} />
      </Container>
    )
  }
}

export default PokemonPage
