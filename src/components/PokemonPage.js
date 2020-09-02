import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemonObj => {this.setState({pokemons: pokemonObj})})
  }
//call back function need pass down to form
  newPokemonState = newPokemon =>{
    console.log(newPokemon)
    //create new arr with old pokemon data and the new one
    const updatedPokemon = [...this.state.pokemons, newPokemon]
    this.setState({pokemons: updatedPokemon})
  }
//search 
  changeSearchTerm = (theTermThatIsBeingTyped) => {
    this.setState({
      searchTerm: theTermThatIsBeingTyped
    })
  }

  render() {
    //console.log("p", this.state)

    if(this.state.pokemons.length === 0) {
      return <h1>Loading...</h1>
    }

    let theFilteredPokemonArray = this.state.pokemons.filter((pokemonFil) => {
      return pokemonFil.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemonState={this.newPokemonState}/>
        <br />
        <Search  
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm} />
        <br />
        <PokemonCollection pokemons = {theFilteredPokemonArray}/>
      </Container>
    )
  }
}

export default PokemonPage
