import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Product from './product';

export default class productList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: null,
      productsCount: null,
    };
  }

  getProducts() {
    axios.get('http://127.0.0.1:3000/products')
      .then(data => this.setState({ products: data.data }))
      .catch(err => {
        // alert('Hubo un error ?'+ JSON.stringify(err));
        console.log(err);
      });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    if (!this.state.products) {
      return <span>Cargando...</span>;
    }

    return (
      <section className="section">
        <div className="columns">
          {
            this.state.products.map((product, i) =>
              <Product key={i} product={product} productIterator={i} />)
          }
        </div>
      </section>
    );
  }
}
