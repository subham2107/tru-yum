import React from 'react';
import LoginSignup from './LoginSignup';
import './NavBar.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function SearchBar(){
  return (<div class="SearchBar">
    <input className="SearchInput" type="text" placeholder="Search for products..."></input>
    <div className="SearchIconWrapper"><img className="SearchIcon" src='/images/search-24px.svg' alt='searchIcon'/></div>
    </div>);
}
function NavBar(){
  const onLoginClick = () =>{
    return (
      window.location = '/login'
    );
  }
  const categoriesClick = (category) => {
    console.log('dsjvjvnvx');
    console.log(`hi ${category}`);
    return (
      window.location = `/products/categories/${encodeURIComponent(category)}`
   );
}

const cartClick = () => {
  console.log('dsjvjvnvx');
  return (
    window.location = `/cart/cartitems`
 );

}
  return (
    
      <header class="navbar">
        <div class="companyLogo"><a href="/">Tru<span class="logoY">Y</span>um</a></div>
      <div class="dropdown-nav">Categories <span><img class="dropdown-arrow" src="/images/down-arrow.svg"/></span>
  
  <div class="dropdown-content">
  <a onClick={() => categoriesClick('Fruits and vegetables')}>Fruits and vegetables</a>
  <a onClick={() => categoriesClick('Fish/Meat/Eggs')}>Fish/Meat/Eggs</a>
  <a onClick={() => categoriesClick('Cooked food')}>Cooked food</a>
 
  </div>
  </div>
  <SearchBar/>
  <div><img class="cart-icon" onClick={() => cartClick()}src="/images/shopping_cart.png"/></div>
  <div>
    <span class="login" onClick={onLoginClick}>Login</span>
    <span style={{margin: "0 10px 0 10px"}}>/</span>
    <span class="signup">Signup</span>
  </div>
  
</header>
    );
}

export default NavBar;

