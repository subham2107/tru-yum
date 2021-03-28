// import React from 'react';
// import ProductDetails from './ProductDetails';



// class ProductList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//       fetch(`/api/products/categories/${this.props.match.params.cartegoryname}`)
//         .then(response => response.json())
//         .then(response => {
//             //console.log(response)
//             //console.log("aaaa");
//             for(let i=0;i<(response).length;i++)
//            {
//                //console.log((response[i].title));
//                const title = response[i].title;
//                <ProductDetails title = {title} quantity={response[i].quantity} />
//            }
//             this.setState({category: response});
//         });
//     }
    
//     render() {

//         // Category.find({}).then(category => {
//         //     let categoryNames = category.map(function (cat) {
//         //       return cat.name;
//         //     });

//         let categories= [];
//     categories=(this.state.category);
//         //console.log(this.state.category);
//         console.log(`hellllllllllllo ${categories.title}`);
//         // Category.find({}).then(category => {
//         //          let categoryNames = categories.map(function (cat) {
//         //            return cat.name;
//         //         });

//         return (
            
//             <div>
//                Product data: {JSON.stringify(this.state.category)}
//             </div>
//         );
    
//     // render() {
//     //     return (
            
//     //         <div>Product data: {JSON.stringify(this.state.category)}</div>
//     //     );
//     // }
// }
// }

//export default ProductList;

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
        return (<div class="main-content2">
            <div class="cardd">
  {/* <a href="https://my-encoder-decoder.netlify.app/base64encode" target="_blank"/> */}
  <div class="img-wrapperr">
  <img class="card-imgg" src="./images/{this.props.title}.jpg"/>
</div>
</div>
{/* <div>{this.props.title}</div>
 <div>{this.props.quantity}</div>
<div>{this.props.product_id}</div>  */}
<div>{this.props.description}</div>


            </div>
            );
    }
    
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
      console.log(JSON.stringify(this.state.products));
    }
    render() {
        return (
            <div>
                <NavBar/>
              {(this.state.products).map((product) => (
                  <ListingProduct
                  title={product.title}
                  description={product.description}
                  quantity={product.quantity}
                  product_id={product._id}
                  price={product.price.mrp}
                  />
              ))}
              <Footer />
            </div>
        );
    }
  }

  export default ProductList;






