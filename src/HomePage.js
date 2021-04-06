import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Banner from './Banner';
import Product from './Product';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HomePage">
        <NavBar/>
        <Banner/>
        <Product/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
