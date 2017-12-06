import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Item from './Item';

export default class Products extends React.Component {

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
    return (
      <section className="section">
        <div className="columns">

          <nav className="pagination" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
              {/* @TODO add pager */}
            </ul>
          </nav>

          {this.state.products === null ?
            <span>Cargando!</span> :
            this.state.products.map(product =>
              <Item product={product} />
            )
          }
        </div>
      </section>
    );
  }
}
