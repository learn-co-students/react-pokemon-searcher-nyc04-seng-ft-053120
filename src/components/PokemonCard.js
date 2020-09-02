import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  toggleLogic=()=>{
    this.setState(
      prevState=>{
        return {
          clicked: !prevState.clicked
        }
      }
    )
  }
  render() {
    //console.log("CARD",this.props.pokemon)
    const image = this.state.clicked ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
    return (
      <Card>
        <div onClick={this.toggleLogic}>
          <div className="image" >
            <img src={image} alt="oh no!" />
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
