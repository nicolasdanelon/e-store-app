import React, { Component } from 'react';
import Main from './Main.js';
import Header from "./Header.js";
import Footer from "./Footer.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}
