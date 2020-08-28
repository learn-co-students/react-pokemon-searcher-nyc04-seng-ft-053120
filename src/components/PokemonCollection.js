import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemonCards = () => {
    let filteredPokemon = this.props.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.props.search.toLowerCase()))

    return filteredPokemon.map((poke) => <PokemonCard key={poke.id} pokemon={poke} />)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
