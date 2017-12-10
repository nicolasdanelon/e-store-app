import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const fields = [
  {type:'text', placeholder:'Product Name', id:'name'},
  {type:'text', placeholder:'Brand', id:'brand'},
  {type:'number', placeholder:'Price', id:'price'},
  {type:'number', placeholder:'List Price', id:'listPrice'},
  {type:'number', placeholder:'Category ID', id:'categoryId'},
];

export default class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      category_id: '',
      list_price: '',
      price: '',
      name: '',
      brand: '',
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  renderRowForm(inputType, placeholder, id) {
    return (
      <FormGroup
        controlId={id}
        key={id}
        >
        <ControlLabel>{placeholder}</ControlLabel>
        <FormControl
          type={inputType}
          value={this.state.value}
          placeholder={placeholder}
          onChange={(e) => this.handleChange(e)}
        />
        <FormControl.Feedback />
      </FormGroup>
    )
  }

  render() {
    return (
      <form>
        {fields.map(field => this.renderRowForm(field.type, field.placeholder, field.id ))}
      </form>
    )
  }
}