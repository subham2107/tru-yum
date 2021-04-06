import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './MyCart.css';
import './index.css';

class  MyCarts extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){
    
      const src = this.props.title;
      const image = `/images/${src}.jpg`;
      return (
          <div className="mycartItems">   

  <div className="cartcontainer"><img className= "cartImg" src = {image} ></img></div>
  <div className="cartDetails"><h3>{this.props.title}</h3> <h4>Rs. {this.props.price}</h4><h4>Quantity: {this.props.quantity}</h4>
  <button className="removeBtn" onClick={() => onRemoveClick(this.props.product_id)}>REMOVE</button>
   </div>
  <div>
    <p className="delP">Delivery in 7 days | Free</p>
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


const categoriesClick = () => {
      fetch('/api/cart').then(res => {
          if (res.status === 200) {
      return (
        window.location = "/shipping"
     );}
     else{
       window.location = "/login"
     }
    
    })
  }
class MyCart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        items: [],
        price : {},
        info: {}
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
      const res = await fetch(`/api/cart/cartitems`);
      const data = await res.json();
      return data;
    }
  
    async componentDidMount() {
      const cart = await this.getRandomUsers();
      this.setState({ items : cart.items });
      this.setState({price : cart});
      if(this.state.items){
        this.setState({info: "A"});
    }
  }

   
    render() {
      
      if(this.state.items){

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
                <div className="totalCheckout"><h1>Total Amount = Rs. {this.state.price.totalprice}</h1>
                <button className="proceedToCheckoutBtn" onClick={() => categoriesClick(this.props.id)}>PROCEED TO CHECKOUT</button></div>
                </div>
                <Footer />
              
         </div>
        );
      }
      else{
        return (
        <div>
        <div style={{minHeight: "calc(100vh - 31px)"}}>
              <NavBar/>
              <div style={{fontSize: "20px",margin:"20px",display:"flex",justifyContent:"center",paddingTop: "40vh"}}>
                There are no items in your cart !!!!
                </div>
                </div>
                <Footer />
                </div>
      
      );
        }
    }
  }
  export default MyCart;