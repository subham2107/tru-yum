import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';
import './ProductList.css';

class ListingProduct extends React.Component {
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
// const {imggg} = "/images/groceryicon.jpeg";
console.log(this.props.price);
return (
  <div  class="grid-item" style={{marginLeft:"50px"}}>   
<img style ={{cursor: "pointer",marginTop:"20px",boxShadow: "0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)"}} 
src = {image} height="200px" width="200px" 
onClick={() => categoriesClick(this.props.product_id)}></img>
<div style={{marginTop:"15px"}}>{this.props.title} </div> <div>Rs.{this.props.price} </div>
<hr style={{maxWidth:"calc(100vw - 50px)"}}></hr>
</div>

);
    }
    
  }

  const categoriesClick = (productid) => {
    console.log('dsjvjvnvx');
    console.log(`hi ${productid}`);
    return (
      window.location = `/products/${productid}`
   );
  
  }


class ProductList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [],
      };
      this.getRandomProducts = this.getRandomProducts.bind(this);
    }
    async getRandomProducts() {
      const res = await fetch(`/api/products/categories/${this.props.match.params.cartegoryname}`);
      const data = await res.json();
      console.log(data)
      return data;
    }
    async componentDidMount() {
      const products = await this.getRandomProducts();
      console.log(products);
      this.setState({ products });

      console.log(this.state.products);
      
    }
    
    render() {
        return (
            <div>
              <div style={{minHeight: "calc(100vh - 25px)"}}>
                <NavBar/>
              {(this.state.products).map((product) => (
                  <ListingProduct
                  title={product.title}
                  quantity={product.quantity}
                  product_id={product._id}
                  price={(product.price.mrp)}
                  //price: {mrp:parseFloat(product[0].price.mrp),list_price:parseFloat(product[0].price.mrp)} 
                  />
              ))}
              </div>
              <Footer />
            </div>
        );
    }
  }

  export default ProductList;






