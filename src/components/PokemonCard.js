import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    let pokemon = this.props.pokemon
    //console.log(pokemon)
    let{name, sprites, hp} = pokemon
     //console.log(name);
     //let theFoundHpObject = hp.find(hpsObj => {return hpsObj.name === "hp"})
     let {front, back} = sprites

    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={front} />
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
