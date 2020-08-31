import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state ={
    flip: true
  }

handleClick = () => {
  this.setState({
    flip: !this.state.flip
  })
}


  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.flip ? (this.props.pokemon.sprites.front) : (this.props.pokemon.sprites.back)}
              alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
