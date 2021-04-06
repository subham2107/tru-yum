import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Banner from './Banner';


class AddtoCart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        cart: [],
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {

      const res = await fetch(`/api/cart/${this.props.match.params.productid}`, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      const data = await res.json();
      return data;
    }
  
    async componentDidMount() {
      const cart = await this.getRandomUsers();
      this.setState({ cart });
      window.location = `/products/${this.props.match.params.productid}`
    }

   
    render() {
        return (
        <div ></div>
        );
    }
  }
  export default AddtoCart;