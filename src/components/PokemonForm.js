import React from 'react'
import { Form } from 'semantic-ui-react'
class PokemonForm extends React.Component {
  // Since we are receiving a change in the input, we create a state with to receive the values and update them from the form as onChange={this.state.name}... and so on for each of the four inputs 
  state = {
    name:"",
    hp: "",
    frontUrl:"",
    backUrl: ""
  }
  // We then create a handler to abstract the user input
  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      // inside setState we dynamically update each value according to name and before it we assign the target, value, name to evt vars
      [name]: value
    });
  }
  // we then create an onSubmit synthetic event to recieve the form inputs 
submitHandler = evt => {
evt.preventDefault()
// inside submit handler we assign the current state of each value to an object that resembles the object in side the array in db, 
  const pokeObj = {
    name: this.state.name,
    hp: this.state.hp,
    sprites: {
      front: this.state.frontUrl,
      back: this.state.backUrl
    }
  }
//inside the same submit handler we create a fetch for post, inside the stringify.JSON() we place the current pokeobj with the present state values 
    fetch("http://localhost:3000/pokemon",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }, 
      body: JSON.stringify(pokeObj)
    })
    .then(r => r.json())
    .then(newPokemon => {
      this.props.newPokemonState(newPokemon)
    })
  }
  
  render(){
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name}  onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}  onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontImage} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backImage} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}
export default PokemonForm
