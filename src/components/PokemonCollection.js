import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {




  renderCard = () => {
    console.log(this.props.pokemons)

     if (this.props.search === ""){
           return this.props.pokemons.map(p=> {
          return <PokemonCard key={p.id} pokemon= {p}/>
        })
      }
      else {console.log(this.props.search)
        return this.props.pokemons.filter((pokemon) => (
          pokemon.name.includes(this.props.search)
        ))
        .map( pokemon => (<PokemonCard key={pokemon.id} pokemon={pokemon}/>))
      }
     
  } 


  render() {
    // console.log(this.state.pokemons)
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
