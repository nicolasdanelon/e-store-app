import React from 'react';
import { Switch, Route } from 'react-router-dom'

import ProductList from './products/productList';
import AddProduct from './products/addProduct';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ProductList} />
      <Route path='/add' component={AddProduct} />
    </Switch>
  </main>
);

export default Main;