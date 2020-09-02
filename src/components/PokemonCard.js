import React from 'react'
import { Card } from 'semantic-ui-react'



class PokemonCard extends React.Component {
  state = {
    image: true
  }
  changeImage = () => {
  return  this.setState({
      image: !this.state.image
    })
  }
  render() {
    // debugger
    return (
      <Card>
        <div>
          <div className="image" onClick={this.changeImage} >
            <img src={this.state.image ? this.props.pokemons.sprites.front : this.props.pokemons.sprites.back} alt="oh no!"/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemons.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemons.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
