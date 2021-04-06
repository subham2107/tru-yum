import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import './Orders.css';
import './index.css';

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
      <div className="mycartItems">   

<div className="cartcontainer"><img className= "cartImg" src = {image} ></img></div>
<div className="cartDetails"><h3>Name: {this.props.title}</h3> <h4>Price: Rs. {this.props.productprice}</h4><h4>Quantity: {this.props.quantity}</h4>
<h4 >Status: {this.props.status}</h4>
<h4>Order Date: {this.props.createdDate}</h4>
 </div>

 <div></div>
 
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
              status= {order.status}
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
                There are no orders yet !
                </div>
                </div>
                <Footer/>
            </div>
      );
      }
  }
}






  export default Orders;

  