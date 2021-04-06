import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Shipping.css';
import './index.css';
import {initiatePayment} from './payment';

class Shipping extends React.Component {
    constructor(props) {
      super(props);
    }
    
 
    render() {
     
      

        return (
        
<div>
<div style={{minHeight: "calc(100vh - 31px)"}}>
<NavBar/>
<div className="shipping_div">
<form className="shipping_form">
  
  <div className="shippingCity">City: <input  className="cityInput" placeholder="City"   type="text" ></input></div>
  <div className="shippingPC">Postal Code: <input  className="pcInput" placeholder="Postal Code"   type="text" ></input></div>
  <div className="shippingState">State: <input  className="stateInput" placeholder="State"   type="text"  ></input></div>
  <div className="shippingCountry">Country: <input className="countryInput"  placeholder="Country"  type="text" ></input></div>
</form>

<div>
  <button type="submit" className="shippingformBtn" onClick={() => placeOrderClick()}>Pay Now</button>
</div>

</div>
</div>
<Footer/>
</div>
        );
    }
  }

  const placeOrderClick = () => {
    
      const paymentHandlers = {
        onSuccess : (options) => {
          fetch(`/api/orders/${options.id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
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
  export default Shipping;