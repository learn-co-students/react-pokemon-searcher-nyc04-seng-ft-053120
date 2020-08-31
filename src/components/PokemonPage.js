import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonArray: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
      .then(res => res.json())
      .then(pokemonArray => {
        this.setState({ pokemonArray: pokemonArray })
      })
  }

  searchOnChange = (event) => {
    this.setState({ searchFilter: event.target.value })
  }

  formOnSubmit = (event) => {

    event.persist()

    const newPokemon = {
      name: event.target.name.value,
      hp: event.target.hp.value,
      sprites: {
        front: event.target.frontUrl.value,
        back: event.target.backUrl.value
      }
    }

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    }

    fetch(`http://localhost:3000/pokemon`, options)
      .then(res => res.json())
      .then(newPokemon => {
        this.setState(previousState => ({
          pokemonArray: [...previousState.pokemonArray, newPokemon]
        }))
      })
  }

  render() {
    // console.log(this.state)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onSubmitHandler={this.formOnSubmit} />
        <br />
        <Search onChangeHandler={this.searchOnChange} />
        <br />
        <PokemonCollection pokemonArray={this.state.pokemonArray} searchFilter={this.state.searchFilter} />
      </Container>
    )
  }
}

export default PokemonPage
