import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './ProductDetails.css';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render (){
//         return (<div class="main-content2">
//             <div class="cardd">
  
//   <div class="img-wrapperr">
//   <img class="card-imgg" src="/images/{this.props.title}.jpg"/>
// </div>
// </div>
// <div>{this.props.title}</div>
//  <div>{this.props.quantity}</div>
// <div>{this.props.product_id}</div> 
// <div>{parseFloat(this.props.price)}</div>
// </div>);
const src = this.props.title;
const image = `/images/${src}.jpg`;
return (
  <div>
    <div class="prodDetailsgrid">
  <div >   
<img class= "detailsImg" src={image} />
</div>

<div class="priceDetails">
<h1>{this.props.title}</h1><h2>({this.props.category})</h2>

<h3><strike>Price Rs. {this.props.list_price} </strike></h3> 

<h3>Price Rs. {this.props.price}</h3>
<p>Expect delivery within 7 business days.</p>
<button class="AddCartBtn"
    onClick={() => categoriesClick(this.props.product_id)} >ADD TO CART</button>
</div>
</div>

<div class= "prodDesc">
<h3>Description</h3>
<hr></hr>
  {this.props.description}</div>
</div>

);
    }
    
  }

  const categoriesClick = (productid) => {
    console.log('dsjvjvnvx');
    console.log(`abcvcds ${productid}`);
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
      // console.log(data);
      // console.log(`hi ${this.state.products}`);
      return data;
    }
    async componentDidMount() {
      const products = await this.getRandomProducts();
      // console.log(`hi ${products}`);
      this.setState({ products });
      this.setState({ price : products.price });

      //console.log(this.state.products.price.mrp);
     // console.log(products.price.mrp);
       //let myPrice=products.price.mrp;
    }
    render() {
      console.log('hi');
      console.log(this.state.products);
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
                  //price={(this.state.products.price.mrp).replace(/\D/g,'')}
                   //price={(JSON.stringify(this.state.products.price.mrp)).replace(/\D/g,'')}
                  />
                  </div>
              <Footer />
            </div>
        );
    }
  }

  export default ProductDetails;






