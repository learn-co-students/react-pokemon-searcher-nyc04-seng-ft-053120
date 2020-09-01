import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPoke = () => this.props.pokemons.map((poke) => <PokemonCard key={poke.id} pokemon= {poke}/>)
  
  
  render() {
    return (
      
      <Card.Group itemsPerRow={5}>
        {this.renderPoke()}
      </Card.Group>
      
    )
  }
}

export default PokemonCollection
