import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import LoginSignup from './LoginSignup';
import SignUp from './SignUp';
import Profile from './Profile';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AddtoCart from './AddtoCart';
import MyCart from './MyCart';
import Shipping from './Shipping';
import Orders from './Orders';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginSignup} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/products/categories/:cartegoryname" component={ProductList } />
          <Route exact path="/products/:productid" component={ProductDetails} />
          <Route exact path="/cart/cartitems" component={MyCart} />
          <Route exact path="/cart/:productid" component = {AddtoCart} />
          <Route exact path="/shipping" component = {Shipping} />
          <Route exact path="/orders/myorders" component = {Orders} />
        </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
