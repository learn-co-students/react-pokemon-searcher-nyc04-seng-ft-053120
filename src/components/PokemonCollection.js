import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  searchFilter = () => {
    let pokemonSearchName = this.props.pokemonSearch
    if (pokemonSearchName) {
      return this.props.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonSearchName.toLowerCase()))
    } else {
      return this.props.pokemons
    }
  }

  renderPokemonCard = () => {
    return this.searchFilter().map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemonCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
