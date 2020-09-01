import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name:"",
    hp:"",
    front:"",
    back: ""
  }

  handleChange = (evt) =>{
    let { name , value } = evt.target
    this.setState({
      [name] : value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let {name,hp,front,back} = this.state
    let newPokemon = {
      name:name,
      hp:hp,
      sprites: {
        front:front,
        back:back
      }//end of sprites
    }//end of newPokemon
    this.props.newPokemonForm(newPokemon)
    this.setState({
      name:"", hp:"", front:"", back: ""
    })
  }// end on handleSubmit


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={this.handleChange} placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input fluid label="hp" onChange={this.handleChange} placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" onChange={this.handleChange} placeholder="url" name="front" value={this.state.front}/>
            <Form.Input fluid label="Back Image URL" onChange={this.handleChange} placeholder="url" name="back" value={this.state.back}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
