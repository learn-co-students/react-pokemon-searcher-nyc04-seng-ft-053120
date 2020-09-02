import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  
  }
  handleChange = evt => {
    //console.log(event.target)
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = evt => {
  
  //console.log(this.state)
  evt.preventDefault()
  const pokeObj = {
    name: this.state.name,
    hp: this.state.hp,
    sprites: {
      front: this.state.frontUrl,
      back: this.state.backUrl
    }
  }
  
  fetch("http://localhost:3000/pokemon", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(pokeObj)
  })
  .then(r => r.json())
  .then(newPokemon =>{
    //pass a function down from the page Component as a prop
    //talk to parent
    this.props.newPokemonState(newPokemon)
  })
}
  render() {
    console.log("formstate", this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl"value={this.state.frontUrl} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name= "backUrl"value={this.state.backUrl} onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
