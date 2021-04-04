import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

class Order extends React.Component {
  constructor(props) {
      super(props);
  }

  
  render (){
    const src = this.props.title;
    const image = `/images/${src}.jpg`;

    let amt= this.props.amount;
    amt/=100;
    
      return (
        <div class="grid-container33">   
                <div class = "grid-items3">
      <img src = {image} height="100" alt="NotAvailable" height="200px" width = "150px"></img>
      </div>
      <div class = "grid-items3">
      <div class="grid-container44">   
      <div class = "grid-items4">
        
        <div>
          <strong>{this.props.title}</strong>
        </div>
        <br>
        </br>
  
  
      <span>Quantity: {this.props.quantity}</span>
      <div class = "test">
  <span>
    </span>
    </div>
      </div>
      <div class = "grid-items5">
          <div><strong>Order placed on : {this.props.createdDate}</strong></div>
           <strong>Price : Rs. {this.props.productprice}</strong> 
        </div>
      </div>
  
  
    </div>
  </div>
      
      );
  }
}


class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        orders: []
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
      const res = await fetch('/api/orders/myorders');
      const data = await res.json();
      return data;
    }
  
    async componentDidMount() {
      const orders = await this.getRandomUsers();
      this.setState({ orders });
      //console.log(this.state.items);
      console.log(orders);
      console.log(orders.items);
      
    }

   
    render() {
      if(this.state.orders.length !==0){
      return (
          <div>
            <div style={{minHeight: "calc(100vh - 25px)"}}>
            <NavBar/>
              {(this.state.orders).map((order) => (
              order.items.map((item) => (
              <Order
              status={order.status}
              amount={order.amount}
               
                price = {order.amount}
                id = {item.product_id}
                productprice = {item.productprice}
                createdDate = {order.createdAt}
              title = {item.title}
              quantity= {item.quantity}
              />
              
              ))
            )
            )
            }
            </div>
            <Footer/>
            </div>
      );
          }
      else{
        return (
          <div>
            <div style={{minHeight: "calc(100vh - 25px)"}}>
            <NavBar/>
            <div style={{fontSize: "20px",margin:"20px",display:"flex",justifyContent:"center",paddingTop: "40vh"}}>
                You have not ordered anything yet !!!!
                </div>
                </div>
                <Footer/>
            </div>
      );
      }
  }
}






  export default Orders;

  