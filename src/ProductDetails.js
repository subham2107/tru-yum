import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function ProductDetails(props){
  console.log(`hi`);
  console.log(`${props.title}`);
  return (
    
      <div>
        Hellooooo,{props.title}
      </div>
      
    );
}

export default ProductDetails;

