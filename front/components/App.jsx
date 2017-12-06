import React,{ Component } from 'react';

import Header from './Header.jsx';
import Products from './products/Products.js';
import Hero from './Hero.js';
import Footer from './Footer.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Hero />
                <Products />
                <Footer />
            </div>
        );
    }
}
