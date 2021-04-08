import React from 'react';
import LoginSignup from './LoginSignup';
import './NavBar.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function SearchBar(){
  return (<div className="SearchBar">
    <input className="SearchInput" type="text" placeholder="Search for products..."></input>
    <div className="SearchIconWrapper"><img className="SearchIcon" src='/images/search-24px.svg' alt='searchIcon'/></div>
    </div>);
}
class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    cartcount: '',
  };

  this.getRandomUsers = this.getRandomUsers.bind(this);
}

async getRandomUsers() {
    
  const res = await fetch(`/api/cart/getcount`);
  const data = await res.json();
  if(data)
  return data.itemcount;
  else{
    return;
  }
}
async componentDidMount() {
  const cartcount = await this.getRandomUsers();

  if(cartcount){
  this.setState({ cartcount });
  }
  else{
    this.setState({cartcount : 0})
  }
}
render() {

  const categoriesClick = (category) => {
    return (
      window.location = `/products/categories/${encodeURIComponent(category)}`
   );
}

const cartClick = () => {
  return (
    window.location = `/cart/cartitems`
 );

}

const logoClick = () => {
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
  temp  = "Log-in/Sign-up";
}


  return (
    
      <header className="navbar">
        
      <div className="dropdown-nav">Categories <span><img className="dropdown-arrow" src="/images/down-arrow.svg"/></span>
  
  <div className="dropdown-content">
  <span onClick={() => categoriesClick('Fruits and vegetables')}>Fruits and vegetables</span>
  <span onClick={() => categoriesClick('Fish/Meat/Eggs')}>Fish/Meat/Eggs</span>
  <span onClick={() => categoriesClick('Cooked food')}>Cooked food</span>
 
  </div>
  </div>
  <div className="dropdown-nav" ><img className="user-icon" src= "/images/user-login-icon.png"/>
        <div className="dropdown-content">
          <span className = "box" onClick={loginclick}>{temp}</span>
          <span className = "box" onClick = {orderclick}>My orders</span>
          <span className = "box" onClick={logoutclick}>{logout}</span>
          </div>
      </div>
  <div className="companyLogo" onClick={logoClick}>Tru<span className="logoY">Y</span>um</div>
  <SearchBar/>

  

  <div><img className="cart-icon" onClick={cartClick} src="/images/shopping_cart.png"/>
  <span className="cartCount">({this.state.cartcount})</span></div>
  
</header>
    );
  }
}



export default NavBar;

