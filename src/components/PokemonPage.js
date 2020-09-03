import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={ 
    pokemons: [], 
    searchTerm: ""
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(r => r.json())
    .then(pokemons => {
      this.setState({ pokemons: pokemons })
    })
  }

  onChangeHandler = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  submitHandler = newPokemon => {
    this.setState({ pokemons: [newPokemon, ...this.state.pokemons]})
  }
      
  render() {
    let searchedPokemons = this.state.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler}/>
        <br />
        <Search searchTerm={this.state.searchTerm} onChangeHandler={this.onChangeHandler}/>
        <br />
        <PokemonCollection pokemons={searchedPokemons} />
      </Container>
    )
  }
}

export default PokemonPage
