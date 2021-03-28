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
class ProductList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [],
      };
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
    async getRandomUsers() {
      const res = await fetch(`/api/products/categories/${this.props.match.params.cartegoryname}`);
      const data = await res.json();
      console.log(data)
      return data;
    }
    async componentDidMount() {
      const products = await this.getRandomUsers();
      console.log(products);
      this.setState({ products });

      console.log(this.state.products);
      console.log(JSON.stringify(this.state.products));
    }
    render() {
        return (
            <div>
              {(this.state.products).map((user) => (
                  <h1>
                  title={user.title}
                  quantity={user.quantity}
                  </h1>
              ))}
            </div>
        );
    }
  }

  export default ProductList;






