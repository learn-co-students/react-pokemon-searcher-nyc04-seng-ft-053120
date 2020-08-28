import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    let updatedPokemon = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    this.props.handleFormOutput(updatedPokemon) 
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              onChange={this.handleChange} 
              fluid label="Name" 
              placeholder="Name" 
              name="name" 
              value={this.state.name} 
            />
            <Form.Input 
              onChange={this.handleChange} 
              fluid label="hp" 
              placeholder="hp" 
              name="hp" 
              value={this.state.hp} 
            />
            <Form.Input 
              onChange={this.handleChange} 
              fluid label="Front Image URL" 
              placeholder="url" 
              name="frontUrl" 
              value={this.state.frontUrl} 
            />
            <Form.Input 
              onChange={this.handleChange}
              fluid label="Back Image URL" 
              placeholder="url" 
              name="backUrl" 
              value={this.state.backUrl} 
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
