import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav-left">
                    <a className="nav-item subtitle is-3" href="/">
                        <strong>Cookies</strong> &nbsp;store
                    </a>
                </div>
                <div className="nav-right nav-menu snipcart-summary">
                    <span className="nav-item">
                        <a className="button is-white snipcart-checkout" href="#">
                            <span className="icon is-small">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </span>
                            <span>
                                View cart (<span className="snipcart-total-items">0</span>)
                            </span>
                        </a>
                    </span>
                </div>
            </nav>
        );
    }
}
