import React from 'react'
import { Card } from 'semantic-ui-react'
import '../PokemonCard.css'

class PokemonCard extends React.Component {

  // Default image display is the front
  state = {
    image: this.props.pokemon.sprites.front
  }

  // When clicked the card should toggle between displaying the front and back pictures
  handleClick = (evt) => {
    const {sprites: {front, back}} = this.props.pokemon;

    (this.state.image === front) 
      ? this.setState({ image: back })
      : this.setState({ image: front })
  }
  
  
  render() {
    const {name, hp} = this.props.pokemon;

    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img alt={name} src={this.state.image}/>
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
