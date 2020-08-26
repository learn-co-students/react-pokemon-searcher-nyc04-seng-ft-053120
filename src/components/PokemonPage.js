import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      query: "",
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemonsArr => this.setState({pokemons: pokemonsArr}))
  }

  handleAddPokemon = (name, hp, frontURL, backURL) => {
    const postConfig = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        "name": name.toLowerCase(),
        "hp": hp,
        "sprites": {
            "front": frontURL,
            "back": backURL
        }
      })
    }

    fetch('http://localhost:3000/pokemon', postConfig)
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemons: [...this.state.pokemons, pokemon] }))
  }

  handleSearchPokemon = event => {
    this.setState({ query: event.target.value });
  }

  render() {
    const pokemons = this.state.pokemons.filter(p => p.name.includes(this.state.query));
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleAddPokemon={this.handleAddPokemon} />
        <br />
        <Search handleSearchPokemon={this.handleSearchPokemon} />
        <br />
        <PokemonCollection pokemons={pokemons} />
      </Container>
    )
  }
}

export default PokemonPage
