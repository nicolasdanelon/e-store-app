import React, { Component } from 'react';

export default class Products  extends Component {

    randomIntInc (low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

    render() {
        return (
            <div className="column" key={this.props.product.id}>
                <div className="card">
                    <div className="card-image has-text-centered">
                        <span>
                            <img src="http://lorempixel.com/400/300/technics"
                            //   style="max-width: 90%; min-height: 200px; width: auto; height: auto"
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
                            <button className="snipcart-add-item button is-primary is-medium">Add to cart</button>
                        </span>
                    </footer>
                </div>
            </div>
        );
    }
}