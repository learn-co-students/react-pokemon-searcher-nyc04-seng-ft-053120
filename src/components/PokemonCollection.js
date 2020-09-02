import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

// will be iterating through the collection of information we have and rendering out a singular pokemon card for each

class PokemonCollection extends React.Component {
  render() {
    let arrPokemons = this.props.pokemons.map(eachPoke => {
      return <PokemonCard key={eachPoke.name} pokemon={eachPoke}/>
    })

    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {arrPokemons}
      </Card.Group>
    )
  }
}

export default PokemonCollection;
