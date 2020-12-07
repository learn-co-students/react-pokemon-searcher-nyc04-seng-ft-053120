import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state ={
    cardflip: false 
  }

  handleCardFlipClick = () => {
    this.setState({
      cardflip: !this.state.cardflip
    })
  }

  render() {

    let {name, hp, sprites } = this.props.poke 
    //poke={name: "name", hp: "hp", sprites: "sprites"}
    let {front, back} = sprites
    //sprites={front: "front_url", back: "back_url"}

    // console.log("sprites", sprites)
    // console.log(this.props.poke)
    return (
      <Card onClick={this.handleCardFlipClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.cardflip ? back : front}/>
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
