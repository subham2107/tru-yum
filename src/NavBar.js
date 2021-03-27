import React from 'react';
import LoginSignup from './LoginSignup';
import './NavBar.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function SearchBar(){
  return (<div class="SearchBar">
    <input className="SearchInput" type="text" placeholder="Search for products..."></input>
    <div className="SearchIconWrapper"><img className="SearchIcon" src={'/images/search-24px.svg'} alt='searchIcon'/></div>
    </div>);
}
function NavBar(){
  const onLoginClick = () => {
    console.log("hi");
    return (
      window.location = '/login'
   );

}
  return (
    
      <header class="navbar">
        <div class="companyLogo"><a href="https://my-utility-tools.netlify.app/" target="_blank">Tru<span class="logoY">Y</span>um</a></div>
      <div class="dropdown-nav">Categories <span><img class="dropdown-arrow" src="./images/down-arrow.svg"/></span>
  
  <div class="dropdown-content">
    <a href="#">Fruits and vegetables</a>
    <a href="#">Fish/Meat/Eggs</a>
    <a href="#">Cooked foods</a>
 
  </div>
  </div>
  <SearchBar/>
  <div><img class="cart-icon" src="./images/shopping_cart.png"/></div>
  <div>
    <span class="login" onClick={onLoginClick}>Login</span>
    <span style={{margin: "0 10px 0 10px"}}>/</span>
    <span class="signup">Signup</span>
  </div>
  
</header>
    );
}

export default NavBar;

