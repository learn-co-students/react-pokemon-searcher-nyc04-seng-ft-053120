import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
state = {displayFront: true}

  handleOnClick = () => {
    this.setState({ displayFront: !this.state.displayFront})
  }

  render() {
    let {name, hp, sprites} = this.props.pokemon
    let displayFront = this.state.displayFront
    return (
      <Card>
        <div>
          <div className="image"  onClick={this.handleOnClick}>
            <img src={displayFront ? sprites.front : sprites.back} alt={name}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} 
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
