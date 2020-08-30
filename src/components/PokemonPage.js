import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],

    searchTerm: '',

    name: '',
    hp: '',
    front: '',
    back: ''
  }

  // When component mounts, make fetch to DB and store retrieved pokemons in this.state.pokemons
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(pokemons => this.setState({ pokemons }));
  }

  // Update the state's searchTerm
  handlePokemonInput = (evt) => this.setState({ searchTerm: evt.target.value })

  // On submit make a post request to server
  handleFormSubmit = (evt) => {
    evt.preventDefault();

    const newPokemon = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.front,
        back: this.state.back
      }
    }

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(newPokemon)
    })
      .then(response => response.json())
      .then(newPokemon => {

        this.setState({name: '', hp: '', front:'', back: '', pokemons: [...this.state.pokemons, newPokemon]})
      });
  }

  // Change the formInput state
  handleFormInput = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          formInput={this.state}
          handleFormSubmit={this.handleFormSubmit}
          handleFormInput={this.handleFormInput}
        />
        <br />
        <Search 
          searchTerm={this.state.searchTerm}
          handlePokemonInput={this.handlePokemonInput}
        />
        <br />
        <PokemonCollection 
          searchTerm={this.state.searchTerm} pokemons={this.state.pokemons}
        />
      </Container>
    )
  }
}

export default PokemonPage
