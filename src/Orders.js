import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import './Orders.css';

class Order extends React.Component {
  constructor(props) {
      super(props);
  }

  
  render (){

    
   
    const src = this.props.title;
    const image = `/images/${src}.jpg`;

    let amt= this.props.amount;
    amt/=100;

    //let myDate = new Date(this.props.createdDate);
    //alert(myDate);
   // console.log(myDate);
      return (
      

      <div class="mycartItems">   

<div class="cartcontainer"><img class= "cartImg" src = {image} ></img></div>
<div class="cartDetails"><h3>{this.props.title}</h3> <h4>Rs. {this.props.productprice}</h4><h4>Quantity: {this.props.quantity}</h4>
<h4>Order Date: {this.props.createdDate}</h4>

{/* <div class="_3dY_ZR"><button class="_23FHuj" disabled=""> – </button><div class="_26HdzL"><input type="text" value="1" class="_253qQJ"/></div><button class="_23FHuj"> + </button></div>
 */}
 </div>
<div>
  <p class="delP">Delivery in 7 days | Free</p>
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

  