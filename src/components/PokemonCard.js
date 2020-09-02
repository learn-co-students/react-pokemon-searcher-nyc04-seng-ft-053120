import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  // SET CLICK STATE 
  state = {
    clicked: false
  }

  // CREATE FUNCTION TO UPDATE STATE
  handleToggle = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked
    }))
  }

  render() {
    // console.log(this.props.pokemon)
    const {hp, name, sprites} = this.props.pokemon
    const {back, front} = sprites
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleToggle}>
            <img alt={name} src={this.state.clicked ? back : front}/>
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
