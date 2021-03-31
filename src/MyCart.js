import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class  MyCarts extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){
      console.log("hhhh")
      const src = this.props.title;
      console.log("llll")
      //console.log(this.props.id);
      const image = `/images/${src}.jpg`;
      return (
          <div class="grid-item">   

<img src = {image} height="100" alt="NotAvailable"></img>{this.props.product_id} --- {this.props.quantity}
{/* <button onClick={() => categoriesClick(this.props.id)}>Add to Cart</button> */}
</div>
      );
  }
}
const categoriesClick = (product_id) => {
    console.log('dsjvjvnvx');
    console.log(`hi ${product_id}`);
    return (
      window.location = `/cart/mycart`
   );
  
  }
class MyCart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        items: [],
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
      const res = await fetch(`/api/cart/cartitems`);
      const data = await res.json();
      // console.log(data._id)
      // console.log(data.items[0].productId)
      return data;
    }
  
    async componentDidMount() {
    console.log("Helllo");
      const cart = await this.getRandomUsers();
      //console.log(cart)
      this.setState({ items : cart.items });
      //console.log(this.state.items);
    }

   
    render() {
      //console.log("ggggg")
      let arr = [];
      //console.log(arr);
      //console.log(this.state.items[0])
      let ar = [];
      ar[0] = "aa";
      ar[1] = "bb";
      console.log("www");

        return (
            <div>
              <NavBar/>
                {(this.state.items.map((eachitem) => (
                <MyCarts
                product_id = {eachitem.product_id}
                quantity = {eachitem.quantity}
                />
                
                )))}
                <Footer />
              
         </div>
        );
    }
  }
  export default MyCart;