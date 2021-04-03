import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

class Order extends React.Component {
  constructor(props) {
      super(props);
  }

  
  render (){
    let amt= this.props.amount;
    amt/=100;
    
      return (
        <div>
             Rs. {amt} for {this.props.quantity} number of {this.props.title} and order is {this.props.status}
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
    }

   
    render() {
      return (
          <div>
            <NavBar/>
              {(this.state.orders).map((order) => (
              order.items.map((item) => (
              <Order
              status={order.status}
              amount={order.amount}
              title = {item.title}
              quantity= {item.quantity}
              />
              ))
            )
            )
            }
            </div>
      );
  }
}






  export default Orders;

  