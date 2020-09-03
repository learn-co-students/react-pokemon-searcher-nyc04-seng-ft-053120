import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state={
    name: "",
    hp: 0,
    frontUrl: "",
    backUrl: ""
  }

handleChange = event => {
  this.setState({ [event.target.name]: event.target.value})
}

handleSubmit = event => {
  event.preventDefault()
  fetch(`http://localhost:3000/pokemon`,{
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify({
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    })
  })
  .then(r => r.json())
  .then(newPokemon => {
    this.props.submitHandler(newPokemon)
  })
}
  render() {
    return (
      <div onChange={this.handleChange}>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
