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
        <div style={{minHeight: "calc(100vh - 31px)"}}>
        <NavBar/>
        <Banner/>
        <Product/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
