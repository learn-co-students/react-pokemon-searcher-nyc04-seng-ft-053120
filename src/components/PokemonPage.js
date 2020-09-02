import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

// we have three children of pokemon: PokemonForm, search, PokemonCollection

class PokemonPage extends React.Component {

state = {

  // working with an array 

  pokemons: [],
  searchWord: "cha"

}

componentDidMount(){
  fetch("http://localhost:4000/pokemon")
  .then(res => res.json())
  .then ((response) => {
   // console.log(response);
   this.setState({
     pokemons: response
   })
    
  })
  
}

changeSearch = (whatIsEntered) => {
  this.setState({
  searchWord: whatIsEntered
  })
  //console.log(whatIsEntered)

}
newPokemonState = newPokemon => {
  //console.log(newPokemon)
  
  const updatedPokemon = [newPokemon, ...this.state.pokemons]
  this.setState({
    pokemons: updatedPokemon
  })
}


  render() {
    let theFilteredPokemonArray = this.state.pokemons.filter((pokemonObjo) => {
     return pokemonObjo.name.toLowerCase().includes(this.state.searchWord.toLowerCase())
    })
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemonState={this.newPokemonState} />
        <br />
        <Search
        searchWord={this.state.searchWord} 
        changeSearch={this.changeSearch}/>
        <br />
        <PokemonCollection pokemons={theFilteredPokemonArray} />







        
      </Container>
    )
  }
}

export default PokemonPage
