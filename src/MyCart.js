import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './MyCart.css';

class  MyCarts extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){
    
  //   const input=document.querySelector('#input');
  // const buttonMinus = document.querySelector('#button-minus');
  // buttonMinus.addEventListener('click', event => {
  //             input.value--;
  // });
  // const buttonPlus = document.querySelector('#button-plus');
  // buttonPlus.addEventListener('click', event => {
  //             input.value++;
  // });

      const src = this.props.title;
      
      //console.log(this.props.id);
      const image = `/images/${src}.jpg`;
      return (
          <div class="mycartItems">   

  <div class="cartcontainer"><img class= "cartImg" src = {image} ></img></div>
  <div class="cartDetails"><h3>{this.props.title}</h3> <h4>Rs. {this.props.price}</h4><h4>Quantity: {this.props.quantity}</h4>
  <button class="removeBtn" onClick={() => onRemoveClick(this.props.product_id)}>REMOVE</button>
  <div class="_3dY_ZR"><button class="_23FHuj" disabled=""> – </button><div class="_26HdzL"><input type="text" value="1" class="_253qQJ"/></div><button class="_23FHuj"> + </button></div>
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
        price : {},
        info: {}
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
      if(this.state.items){
        this.setState({info: "A"});
    }
  }

   
    render() {
      //console.log("ggggg")
      
      //console.log(arr);
      //console.log(this.state.items.title)
      
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
                <div class="totalCheckout"><h1>Total Amount = Rs. {this.state.price.totalprice}</h1>
                <button class="proceedToCheckoutBtn" onClick={() => categoriesClick(this.props.id)}>PROCEED TO CHECKOUT</button></div>
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