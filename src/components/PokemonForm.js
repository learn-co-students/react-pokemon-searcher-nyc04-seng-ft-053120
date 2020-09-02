import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  // SET STATE FOR FORM
  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  // HANDLE ALL INPUTS
  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // FUNCTION TO SUBMIT FORM
  handleSubmit = (e) => {
      // console.log(e)
      e.preventDefault()
      // STRUCTURE IT THE SAME WAY AS WE HAVE IT IN THE BACKEND
      let newPoke = {
        name: this.state.name,
        hp: this.state.hp,
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      }
        // FETCH POST REQUEST
        fetch("http://localhost:3000/pokemon", {
          method: "POST",
          headers: {
             "content-type": "application/json"
          },
           body: JSON.stringify(newPoke)
         })
         .then(r => r.json())
         .then((newPokemon) => {
           this.props.addPokemon(newPokemon)
         })
  }
  
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" 
              value= {this.state.name}
              onChange={this.handleChange}
            />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" 
              value= {this.state.hp}
              onChange={this.handleChange}
              />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" 
              value= {this.state.frontURL}
              onChange={this.handleChange}
              />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" 
              value= {this.state.backURL}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm