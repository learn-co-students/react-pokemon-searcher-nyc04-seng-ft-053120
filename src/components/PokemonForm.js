import React from 'react'
import { Form } from 'semantic-ui-react'

// have the state but not control imput 
// form isn't rendering anything 

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  }

  handleChange = evt => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  
  submitHandler = evt => {
    evt.preventDefault()

    const pokeObj = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.frontUrl
      }
    }

    
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokeObj)
    })
      .then(r => r.json())
      .then(newPokemon => {
        

        this.props.newPokemonState(newPokemon)
      })
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name"  value={this.state.name} onChange={this.handleChange}  />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl"  value={this.state.frontUrl} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
