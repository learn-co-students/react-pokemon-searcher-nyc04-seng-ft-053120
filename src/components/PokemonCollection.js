import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  turnToCard = () => {
    return this.props.pokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemons={pokemon}/>)
  }

  render() {
    // console.log("Pokemon Collection", this.props)
    return (
      <Card.Group itemsPerRow={6}>
        {this.turnToCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
