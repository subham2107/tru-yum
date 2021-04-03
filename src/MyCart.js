import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './MyCart.css';

class  MyCarts extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){

//     <div>
//     <div class="prodDetailsgrid">
//   <div >   
// <img class= "detailsImg" style ={{marginTop:"40px",boxShadow: "0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)"}} src = {image} height="300px" width="517px" ></img>
// </div>

// <div class="priceDetails">
// <h1>{this.props.title}</h1><h2>({this.props.category})</h2>

// <h3><strike>Price Rs. {this.props.price} </strike></h3> 

// <h3>Price Rs. {this.props.list_price}</h3>
// <p>Expect delivery within 7 business days.</p>
// <button class="AddCartBtn"
//     onClick={() => categoriesClick(this.props.product_id)} >ADD TO CART</button>
// </div>
// </div>

// <div class= "prodDesc">
// <h3>Description</h3>
// <hr></hr>
//   {this.props.description}</div>
// </div>


      console.log("hhhh")
      const src = this.props.title;
      console.log("llll")
      //console.log(this.props.id);
      const image = `/images/${src}.jpg`;
      return (
          <div class="mycartItems">   

  <div class="cartcontainer"><img class= "cartImg" src = {image} ></img></div>
  <div class="cartDetails"><h3>{this.props.title}</h3> <h4>Rs. {this.props.price}</h4><h4>Quantity: {this.props.quantity}</h4>
  <button class="removeBtn" onClick={() => onRemoveClick(this.props.product_id)}>REMOVE</button>
  </div>
  <div>
    <p class="delP">Delivery in 7 days | Free</p>
  </div>
  
</div>

      );
  }
}

const onRemoveClick = (productId) => {
  fetch(`/api/cart/${productId}`, {
    method: 'DELETE'
  }).then(res => {
    if (res.status === 204) {
      window.location.reload();
    }
  });
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
              <div style={{minHeight: "calc(100vh - 31px)"}}>
              <NavBar/>
                {(this.state.items.map((eachitem) => (
                <MyCarts
                title = {eachitem.title}
                product_id = {eachitem.product_id}
                quantity = {eachitem.quantity}
                price = {eachitem.productprice}
                />
                
                )))}
                <div class="totalCheckout"><h1>Total Amount = Rs. {this.state.price.totalprice}</h1>
                <button class="proceedToCheckoutBtn" onClick={() => categoriesClick(this.props.id)}>PROCEED TO CHECKOUT</button></div>
                </div>
                <Footer />
              
         </div>
        );
    }
  }
  export default MyCart;