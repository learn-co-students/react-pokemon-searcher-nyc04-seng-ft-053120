import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    // console.log("FROM PCOLLECTION", this.props.pokemons)
    const pokemonsArr = this.props.pokemons.map((pokemonObj) => {
      return <PokemonCard key={pokemonObj.id} pokemon={pokemonObj}/>
    })
    return (
      <Card.Group itemsPerRow={6}>
        { pokemonsArr }
      </Card.Group>
    )
  }
}

export default PokemonCollection
