import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './ProductDetails.css';
import './index.css';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render (){
const src = this.props.title;
const image = `/images/${src}.jpg`;
return (
  <div>
    <div className="prodDetailsgrid">
  <div >   
<img className= "detailsImg" src={image} />
</div>

<div className="priceDetails">
<h1>{this.props.title}</h1><h2>({this.props.category})</h2>

<h3><strike>Price Rs. {this.props.list_price} </strike></h3> 

<h3>Price Rs. {this.props.price}</h3>
<p>Expect delivery within 7 business days.</p>
<button className="AddCartBtn"
    onClick={() => addToCartClick(this.props.product_id)} >ADD TO CART</button>
</div>
</div>

<div className= "prodDesc">
<h3>Description</h3>
<hr></hr>
  {this.props.description}</div>
</div>

);
    }
    
  }

  const addToCartClick = (productid) => {
    return (
      //alert('Added to cart')
      window.location = `/cart/${productid}`
      
   );
  
  }


class ProductDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [],
        price: {}
      };
      this.getRandomProducts = this.getRandomProducts.bind(this);
    }
    async getRandomProducts() {
      const res = await fetch(`/api/products/${this.props.match.params.productid}`);
      const data = await res.json();
      return data;
    }
    async componentDidMount() {
      const products = await this.getRandomProducts();
      this.setState({ products });
      this.setState({ price : products.price });

    }
    render() {
      
        return (
            <div>
              <div style={{minHeight: "calc(100vh - 31px)"}}>
                <NavBar/>
                 
                  <ProductDetail
                  title={this.state.products.title}
                  category={this.state.products.category}
                  quantity={this.state.products.quantity}
                  description={this.state.products.description}
                  product_id={this.state.products._id}
                  price ={this.state.price.mrp}
                  list_price ={this.state.price.list_price}
                  />
                  </div>
              <Footer />
            </div>
        );
    }
  }

  export default ProductDetails;






