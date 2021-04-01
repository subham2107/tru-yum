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

<img src = {image} height="100" ></img>{this.props.title} {this.props.product_id}  Rs.{this.props.price}--- {this.props.quantity}

</div>

      );
  }
}
const categoriesClick = (product_id) => {
    //console.log('dsjvjvnvx');
    //console.log(`hi ${product_id}`);
    return (
      window.location = '/shipping'
   );
  
  }
class MyCart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        items: [],
        price : {}
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
      const res = await fetch(`/api/cart/cartitems`);
      const data = await res.json();

      console.log(data)
      //console.log(data.items[0].productId)
      return data;
    }
  
    async componentDidMount() {
    console.log("HiHelllo");
      const cart = await this.getRandomUsers();
      console.log(cart)
      this.setState({ items : cart.items });
      this.setState({price : cart});
      // console.log(this.state.title);
      //this.setState({ title : cart.items.title });
    }

   
    render() {
      //console.log("ggggg")
      let arr = [];
      //console.log(arr);
      //console.log(this.state.items.title)
      

        return (
            <div>
              <NavBar/>
                {(this.state.items.map((eachitem) => (
                <MyCarts
                title = {eachitem.title}
                product_id = {eachitem.product_id}
                quantity = {eachitem.quantity}
                price = {eachitem.productprice}
                />
                
                )))}
                <div><h1>Total Price ---- Rs.{this.state.price.totalprice}</h1></div>
                <button onClick={() => categoriesClick(this.props.id)}>Proceed to Checkout</button>
                <Footer />
              
         </div>
        );
    }
  }
  export default MyCart;