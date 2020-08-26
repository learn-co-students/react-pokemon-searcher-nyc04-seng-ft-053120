import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    imgSrc: "",
    isTurned: false,
  }

  componentDidMount() {
    this.setState({imgSrc: this.props.pokemon.sprites.front})
  }

  handleOnClick = () => {
    if (this.state.isTurned) {
      this.setState({imgSrc: this.props.pokemon.sprites.front})
    } else {
      this.setState({imgSrc: this.props.pokemon.sprites.back})
    }
    this.setState(prevState => {
      return {isTurned: !prevState.isTurned}
    })
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <Card onClick={this.handleOnClick}>
        <div>
          <div className="image">
            <img src={this.state.imgSrc} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
