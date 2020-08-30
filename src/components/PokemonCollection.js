import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  // Create a Card out of each pokemon
  // Has access to this.props.searchTerm for filter
  renderPokemons = () => {
    return this.props.pokemons.filter(pokemon => pokemon.name.includes(this.props.searchTerm))
      .map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
  }
  
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        { this.renderPokemons() }
      </Card.Group>
    )
  }
}

export default PokemonCollection
