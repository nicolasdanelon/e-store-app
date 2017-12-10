import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class Product extends Component {

  getRandomArbitrary() {
    return Math.floor(Math.random() * (10 - 1)) + 1;
  }

  render() {
    return (
      <Col xs={6}
           md={4}
           className='text-center'
           key={this.props.product.id}
           style={{ paddingBottom: 20 }}>
        <div className="card-image has-text-centered">
          <span>
            <img src={`http://lorempixel.com/400/300/technics/${this.getRandomArbitrary()}`}
                 className='img-responsive'
            />
          </span>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-4">{this.props.product.name} - {this.props.product.brand}</p>
            <p className="subtitle is-6">$ {this.props.product.price}</p>
          </div>
        </div>
        <footer className="card-footer">
          <span className="card-footer-item">
            <button className="btn btn-success">Add to cart</button>
          </span>
        </footer>
      </Col>
    );
  }
}
