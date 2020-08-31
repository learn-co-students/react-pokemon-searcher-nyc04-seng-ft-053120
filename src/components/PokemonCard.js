import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggle: false,
  }

  handleClick = () => {
    this.setState(prev => ({toggle: !prev.toggle}))
  }

  render() {
    const {name, hp, sprites} = this.props.pokemon
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.toggle ? sprites.back : sprites.front} alt="oh no!" />
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
