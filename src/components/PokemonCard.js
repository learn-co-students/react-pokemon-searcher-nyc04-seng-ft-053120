import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    image: 'front'
  }

  // componentDidMount(){
  //   setInterval(this.changeImage, 500)
  // }

  changeImage = () => {
    if (this.state.image === "front"){
      this.setState({
        image: "back"
      })
    } else if (this.state.image === "back"){
      this.setState({
        image: 'front'
      })
    }
  }

  render() {
    let { name, hp, sprites } = this.props.pokemon

    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.changeImage} src={sprites[this.state.image]} alt="oh no!" />
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
