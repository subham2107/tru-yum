import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import LoginSignup from './LoginSignup';
import Profile from './Profile';
import ProductList from './ProductList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginSignup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/products/category/:cartegoryname" component={ProductList} />

        </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
