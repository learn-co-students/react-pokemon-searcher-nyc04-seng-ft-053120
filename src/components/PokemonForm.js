import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    const {name, hp, front, back} = this.props.formInput;
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={ this.props.handleFormSubmit }>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={ this.props.handleFormInput }/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={ this.props.handleFormInput } />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value={front} onChange={ this.props.handleFormInput } />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value={back} onChange={ this.props.handleFormInput } />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
