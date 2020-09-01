import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: ""
  }

  renderPokemonData = () => {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then((data) => {
      // if state.search !== "" filter through the array by the search 
      
      this.setState((prevState) => ({
        pokemons: [...prevState, ...data]
      }))
     
    } )
  }

  filterPokemons = () => {
    if(this.state.search.length >= 1) {
      let arr = this.state.pokemons.filter((pkObj) => pkObj.name.includes(this.state.search) )
      return arr
    }
    return this.state.pokemons
  }
  

  componentDidMount(){
    this.renderPokemonData()
  }  

  
  handleSearch = (searchInput) => { 
    this.setState({
      search: searchInput
    })
  }
  
  handleNewPokemon = (obj) => {
    console.log(obj)

    fetch("http://localhost:3000/pokemon", {
      method:"POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        hp: obj.hp,
        name: obj.name,
        sprites:{
          back: obj.backUrl,
          front: obj.frontUrl
        }
      })
    }).then(resp => resp.json())
    .then(newObj => {
      this.setState((prev) => ({
        pokemons: [newObj, ...prev.pokemons]
      })
      )
    })
  }
  

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleForm={this.handleNewPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemons()}/>
      </Container>
    )
  }
}

export default PokemonPage
