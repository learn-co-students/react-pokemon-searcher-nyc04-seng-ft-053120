import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  handleOnSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const hp = form.hp.value;
    const frontURL = form.frontUrl.value;
    const backURL = form.backUrl.value;
    this.props.handleAddPokemon(name, hp, frontURL, backURL);
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
