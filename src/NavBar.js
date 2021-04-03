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

const logoClick = () => {
  console.log('dsjvjvnvx');
  return (
    window.location = `/`
 );

}

const logoutclick = () => {
  localStorage.clear();
  fetch('/api/sessions/me', {
    method: 'DELETE'
  }).then(res => {
    if (res.status === 204) {
      window.location = '/';
    }
  });
}

const loginclick = () => {
  return(
    window.location = '/login'
  )

}

const orderclick = () => {
  return (
    window.location = `/orders/myorders`
 );

}

let temp = "";
const loggedInUser = localStorage.getItem("user");
let logout;
if (loggedInUser) {
  temp = `Hi, ${loggedInUser}`;
  logout = "Logout"
}
else{
  temp  = "LogIn/SignUp";
}


  return (
    
      <header class="navbar">
        
      <div class="dropdown-nav">Categories <span><img class="dropdown-arrow" src="/images/down-arrow.svg"/></span>
  
  <div class="dropdown-content">
  <span onClick={() => categoriesClick('Fruits and vegetables')}>Fruits and vegetables</span>
  <span onClick={() => categoriesClick('Fish/Meat/Eggs')}>Fish/Meat/Eggs</span>
  <span onClick={() => categoriesClick('Cooked food')}>Cooked food</span>
 
  </div>
  </div>
  <div class="dropdown-nav" ><img class="user-icon" src= "/images/user-login-icon.png"/>
        <div class="dropdown-content">
          <span class = "box" onClick={loginclick}>{temp}</span>
          <span class = "box" onClick = {orderclick}>My orders</span>
          <span class = "box">Contact us</span>
          <span class = "box" onClick={logoutclick}>{logout}</span>
          </div>
      </div>
  <div class="companyLogo" onClick={() => logoClick()}>Tru<span class="logoY">Y</span>um</div>
  <SearchBar/>

  

  <div><img class="cart-icon" onClick={() => cartClick()} src="/images/shopping_cart.png"/></div>
  <div>
    {/* <span class="login" onClick={onLoginClick}>Login</span>
    <span style={{margin: "0 10px 0 10px"}}>/</span>
    <span class="signup">Signup</span> */}
    {/* <img src="/images/user-login-icon.png" class="user-icon" onClick={onLoginClick} ></img> */}
    
  </div>
  
</header>
    );
}

export default NavBar;

