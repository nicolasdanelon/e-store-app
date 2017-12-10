import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const fields = [
  {type:'text', placeholder:'Product Name', id:'productName'},
  {type:'text', placeholder:'Brand', id:'brand'},
  {type:'number', placeholder:'Price', id:'price'},
  {type:'number', placeholder:'List Price', id:'listPrice'},
  {type:'number', placeholder:'Category ID', id:'categoryId'},
];

export default class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      listPrice: '',
      price: '',
      productName: '',
      brand: '',
      done: false,
    };
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey,
    });
  }

  handleChange(e, fieldName) {
    const field = {[fieldName]:e.target.value};
    this.setState(field);
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
          value={this.state[id]}
          placeholder={placeholder}
          onChange={(e) => this.handleChange(e, id)}
        />
        <FormControl.Feedback />
      </FormGroup>
    )
  }

  submit() {
    axios.post('http://127.0.0.1:3000/products', {
      category_id: this.state.categoryId,
      list_price: this.state.listPrice,
      price: this.state.price,
      name: this.state.productName,
      brand: this.state.brand,
    }, {
      headers: {
        'Origin': 'http://127.0.0.1/'
      }})
      .then(data =>
        this.setState({ done: true })
      )
      .catch(err => console.log('error', err))
  }

  render() {
    return (
      <form>
        {fields.map(field => this.renderRowForm(field.type, field.placeholder, field.id ))}
        <Button onClick={() => this.submit()}>
          Enviar!
        </Button>
        { this.state.done && <Redirect push to='/'/> }
      </form>
    )
  }
}
