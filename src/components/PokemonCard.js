import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    sideDisplayed: "front"
  }

  handleClick = () => {
    console.log(this)
    this.setState(previousState => ({
      sideDisplayed: previousState.sideDisplayed === "front" ? "back" : "front"
    }))
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img alt="oh no!" src={this.props.sprites[this.state.sideDisplayed]} />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
