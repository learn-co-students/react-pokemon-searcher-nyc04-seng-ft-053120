import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    clicked: false
  }

  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked
    }))
  }
  

  render() {
    const {hp, name, sprites} = this.props.pokemon
    // const {back, front} = this.props.pokemon.spirites


    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
           
            <img alt={name} src={this.state.clicked ? sprites.back : sprites.front} /> 
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
             {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
