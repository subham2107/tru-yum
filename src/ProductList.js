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

const src = this.props.title;
const image = `/images/${src}.jpg`;
console.log(this.props.price);


return (



<div class="grid-container" onClick={() => categoriesClick(this.props.product_id)}>   
<div class = "grid-item">
  <div>
  <div>
<img src = {image}  alt="NotAvailable" height="200px" width = "200px"/>
</div>
<h4>{this.props.title}</h4> 
<h4><strike>Price : Rs. {this.props.list_price}</strike> </h4>
<h4>Price : Rs. {this.props.price} </h4>
</div>
</div>
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
                  list_price ={product.price.list_price}
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






