import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Banner from './Banner';


class  MyCarts extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){
      console.log("hhhh")
      const src = this.props.title;
      console.log(this.props.id);
      const image = `/images/${src}.jpeg`;
      return (
          <div class="grid-item">   

<img src = {image} height="100" alt="NotAvailable"></img>
{/* <button onClick={() => categoriesClick(this.props.id)}>Add to Cart</button> */}
</div>
      );
  }
}
// const categoriesClick = (productid) => {
//     console.log('dsjvjvnvx');
//     console.log(`hi ${productid}`);
//     return (
//       window.location = `/cart/mycartnew`
//    );
  
//   }
class AddtoCart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        cart: [],
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
    //   const res = await fetch(`/api/cart/mycartnew`);

      const res = await fetch(`/api/cart/${this.props.match.params.productid}`, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      const data = await res.json();
      console.log(data);
      return data;
    }
  
    async componentDidMount() {
    console.log("Helllo");
      const cart = await this.getRandomUsers();
      this.setState({ cart });
    }

   
    render() {
        return (
        //     <div>
        //       <NavBar/>
        // <Banner/>
        
        // <Footer/>
            
              
        //  </div>

        window.location = `/cart/cartitems`
        );
    }
  }
  export default AddtoCart;