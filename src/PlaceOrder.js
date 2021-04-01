import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import {initiatePayment} from './payment';

// class  MyCarts extends React.Component {
//   constructor(props) {
//       super(props);
//   }
//   render (){
//       console.log("hhhh")
//       const src = this.props.title;
//       console.log("llll")
//       //console.log(this.props.id);
//       const image = `/images/${src}.jpg`;
//       return (
//           <div class="grid-item">   

// <img src = {image} height="100" ></img>{this.props.title} {this.props.product_id} --- {this.props.quantity}
// <button onClick={() => categoriesClick(this.props.id)}>Proceed to Checkout</button>
// </div>
//       );
//   }
// }
// const categoriesClick = (product_id) => {
//     //console.log('dsjvjvnvx');
//     //console.log(`hi ${product_id}`);
//     return (
//       window.location = '/shipping'
//    );
  
//   }
class PlaceOrder extends React.Component {
    constructor(props) {
      super(props);
  
      // this.state = {
      //   items: [],
      // };
  
      // this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
      // const res = await fetch(`/api/cart/cartitems`);
      // const data = await res.json();

      // //console.log(data)
      // //console.log(data.items[0].productId)
      // return data;
    }
  
    async componentDidMount() {
    // console.log("HiHelllo");
    //   const cart = await this.getRandomUsers();
    //   console.log(cart.title)
    //   this.setState({ items : cart.items });
    //   // console.log(this.state.title);
    //   //this.setState({ title : cart.items.title });
    }

   
    render() {
      //console.log("ggggg")
      //let arr = [];
      //console.log(arr);
      //console.log(this.state.items.title)
      
        return (
            <div>
              {/* <NavBar/>
                {(this.state.items.map((eachitem) => (
                <MyCarts
                title = {eachitem.title}
                product_id = {eachitem.product_id}
                quantity = {eachitem.quantity}
                />
                
                )))}
                <Footer /> */}
              
                <button onClick={() => categoriesClick()}>Place Order</button>
         </div>
        );
    }
  }
    const categoriesClick = () => {
      //e.preventDefault();
      console.log("hHHHHelllloooo");
        const paymentHandlers = {
          onSuccess : (options) => {
            fetch(`/api/orders/${options}`, {
            method: 'PUT',
            body: JSON.stringify(options)
            })
            .then(res => res.json())
            .then(res => {
              if(res.state > 300){
                window.location = '/orders/${options.id}'
              }
            })
          },
          onDismiss: () => {
          }
        }
        const onOrderCreateFailure = (err) => {
        }
        initiatePayment(paymentHandlers, onOrderCreateFailure);

  }
  export default PlaceOrder;