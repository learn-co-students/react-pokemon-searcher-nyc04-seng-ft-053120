import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  filterPokemonArray = () => {
    const filteredArray = this.props.pokemonArray.filter(pokemonObj => {
      if (!this.props.searchFilter || this.props.searchFilter === "") return true;
      return pokemonObj.name.startsWith(this.props.searchFilter)
    })
    return this.renderPokemonArray(filteredArray)
  }

  renderPokemonArray = (filteredArray) => {
    return filteredArray.map(pokemon => {
      return (
        <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites} />
      )
    })
  }

  render() {
    console.log(this.props)
    return (
      <Card.Group itemsPerRow={6}>
        {this.filterPokemonArray()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
