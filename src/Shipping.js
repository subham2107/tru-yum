import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Shipping.css';

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

class Shipping extends React.Component {
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
      
      const categoriesClick = () => {
        //console.log('dsjvjvnvx');
        //console.log(`hi ${product_id}`);
        return (
          window.location = '/placeorder'
       );
      
      }

        return (
        //     <div>
        //       <div style={{minHeight: "calc(100vh - 31px)"}}>
        //       <NavBar/>
        //       {/* <NavBar/>
        //         {(this.state.items.map((eachitem) => (
        //         <MyCarts
        //         title = {eachitem.title}
        //         product_id = {eachitem.product_id}
        //         quantity = {eachitem.quantity}
        //         />
                
        //         )))}
        //         <Footer /> */}
        //       <form class="">
        //         <div class="form-group">
        //           <label class="form-label" for="address">Address</label>
        //           <input placeholder="Enter address" required="" type="text" id="address" class="form-control" />
        //         </div>
        //             <div class="form-group"><label class="form-label" for="city">City</label>
        //               <input placeholder="Enter city" required="" type="text" id="city" class="form-control" />
        //             </div>
        //             <div class="form-group"><label class="form-label" for="postalCode">Postal Code</label>
        //               <input placeholder="Enter postal code" required="" type="text" id="postalCode" class="form-control" />
        //             </div>
        //             <div class="form-group"><label class="form-label" for="country">Country</label>
        //               <input placeholder="Enter country" required="" type="text" id="country" class="form-control" />
        //             </div>
                    
        //  </form>
        //  <button onClick={() => categoriesClick(this.props.id)}>Continue</button>
        //  </div>
        //  <Footer />
        //  </div>

<div>
<div style={{minHeight: "calc(100vh - 31px)"}}>
<NavBar/>
<div class="shipping_div">
<form class="shipping_form">
  
  <div class="shippingCity">City: <input  placeholder="City"  required type="text" ></input></div>
  <div class="shippingPC">Postal Code: <input  placeholder="Postal Code"  required type="text" ></input></div>
  <div class="shippingState">State: <input  placeholder="State"  required type="text"  ></input></div>
  <div class="shippingCountry">Country: <input  placeholder="Country" required type="text" ></input></div>
  
  <div>
  <button className="shippingformBtn" onClick={() => categoriesClick(this.props.id)}>Continue</button>
  </div>
</form>
</div>
</div>
<Footer/>
</div>
        );
    }
  }
  export default Shipping;