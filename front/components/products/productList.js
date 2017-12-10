import React from 'react';
import axios from 'axios';
import Product from './product';
import { Pagination } from 'react-bootstrap';

export default class productList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: null,
      productsCount: null,
      activePage: 1,
      pages: 0,
    };
  }

  getRandomArbitrary() {
    return Math.random() * (10000 - 1) + 1;
  }

  getProducts(pageNumber) {
    axios.get(`http://127.0.0.1:3000/products?page=${pageNumber}&${this.getRandomArbitrary()}`, {
      headers: {
        'Origin': 'http://127.0.0.1:8000/'
      }
    })
      .then(({data}) => {
        this.setState({
          products: data.products,
          activePage: data.page,
          pages: data.pages,
        })
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  handleSelect(eventKey) {
    console.log('eventKey', eventKey);
    this.getProducts(eventKey);
  }

  componentDidMount() {
    this.getProducts(1);
  }

  render() {
    if (!this.state.products) {
      return <span>Cargando...</span>;
    }
  
    return (
      <section className="section">
        <div className="row text-center">
          <Pagination
            prev
            next
            bsSize="medium"
            items={this.state.pages}
            activePage={this.state.activePage}
            onSelect={this.handleSelect.bind(this)}
          />
        </div>
        <div className="row">
          {
            this.state.products.map((product, i) =>
              <Product key={i} product={product} productIterator={i} />)
          }
        </div>
      </section>
    );
  }
}
