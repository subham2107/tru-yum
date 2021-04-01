import React from 'react';
import LoginSignup from './LoginSignup';
import './NavBar.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import React from 'react';
// import NavBar from './NavBar';
// import Footer from './Footer';
// import './ProductDetails.css';

// class ProductDetail extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render (){
// //         return (<div class="main-content2">
// //             <div class="cardd">
  
// //   <div class="img-wrapperr">
// //   <img class="card-imgg" src="/images/{this.props.title}.jpg"/>
// // </div>
// // </div>
// // <div>{this.props.title}</div>
// //  <div>{this.props.quantity}</div>
// // <div>{this.props.product_id}</div> 
// // <div>{parseFloat(this.props.price)}</div>
// // </div>);
// const src = this.props.title;
// const image = `/images/${src}.jpg`;
// return (
//   <div>
//   <div class="grid-item" onClick={() => categoriesClick(this.props.product_id)}>   
// <img style ={{cursor: "pointer",marginTop:"20px",boxShadow: "0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)"}} src = {image} height="300px" ></img>{this.props.price}   
// <button class="AddCartBtn"
//     onClick={() => categoriesClick(this.props.product_id)} >Add to cart</button>
// </div>

// <div>{this.props.description}{this.props.price}</div>
// </div>

// );
//     }
    
//   }

//   const categoriesClick = (productid) => {
//     console.log('dsjvjvnvx');
//     console.log(`abcvcds ${productid}`);
//     return (
//       //alert('Added to cart')
//       window.location = `/cart/${productid}`
//    );
  
//   }


// class ProductDetails extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         products: [],
//       };
//       this.getRandomProducts = this.getRandomProducts.bind(this);
//     }
//     async getRandomProducts() {
//       const res = await fetch(`/api/products/${this.props.match.params.productid}`);
//       const data = await res.json();
//       // console.log(data);
//       // console.log(`hi ${this.state.products}`);
//       return data;
//     }
//     async componentDidMount() {
//       const products = await this.getRandomProducts();
//       // console.log(`hi ${products}`);
//       this.setState({ products });

//       console.log(this.state.products.price.mrp);
//       console.log(this.state.products._id);
       
//     }
//     render() {
//         return (
//             <div>
//               <div style={{minHeight: "calc(100vh - 31px)"}}>
//                 <NavBar/>
              
//                   <ProductDetail
//                   title={this.state.products.title}
//                   quantity={this.state.products.quantity}
//                   description={this.state.products.description}
//                   product_id={this.state.products._id}
//                   //price ={this.state.products.price.mrp}
//                   //price={(this.state.products.price.mrp).replace(/\D/g,'')}
//                    //price={(JSON.stringify(this.state.products.price.mrp)).replace(/\D/g,'')}
//                   />
//                   </div>
//               <Footer />
//             </div>
//         );
//     }
//   }

//   export default ProductDetails;









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
  <div><img class="cart-icon" onClick={() => cartClick()} src="/images/shopping_cart.png"/></div>
  <div>
    {/* <span class="login" onClick={onLoginClick}>Login</span>
    <span style={{margin: "0 10px 0 10px"}}>/</span>
    <span class="signup">Signup</span> */}
    <img src="/images/user-login-icon.png" class="user-icon" onClick={onLoginClick} ></img>
    
  </div>
  
</header>
    );
}

export default NavBar;

