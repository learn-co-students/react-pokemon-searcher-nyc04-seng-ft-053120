import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'



class PokemonPage extends React.Component {
  state={
    pokemons : [],
    search: ""
  }
  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(r => r.json())
    .then(pokemonObjs => {
     this.setState({
       pokemons : pokemonObjs
     })
    })
  } 
  
newPokemonState = newPokemon => {
  const updatedPokemon = [newPokemon,...this.state.pokemons]
    this.setState({
      pokemons: updatedPokemon
    })
  }

  filterSearch = (searchWord)=>{
    
    let filt = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
    console.log(filt)
    return filt
  }
    handleInput = (e) => {
      const userSearchInput= e.target.value
      this.setState({search: userSearchInput})
      this.filterSearch(this.state.search)
    }
  render() {
    // console.log(this.state)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemonState={this.newPokemonState}/>
        <br />
        <Search handleInput={this.handleInput} />
        <br />
        <PokemonCollection pokemon={this.filterSearch()}/>
      </Container>
    )
  }
}
export default PokemonPage
