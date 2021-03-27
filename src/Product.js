import React from 'react';
import './Product.css';

function Product (){
  return (
    <div>
      <h1 style ={{textAlign: "center"}}>Check out our products here</h1>
      <main class="main-content">
<div class="card" style={{boxShadow: "1px 2px 3px 2px red"}}>
  <a href="https://my-encoder-decoder.netlify.app/base64encode" target="_blank">
  <div class="img-wrapper">
  <img class="card-img" src="./images/potato.jpg"/>
</div>
  <p>Potato</p></a>
</div>


<div class="card" style={{boxShadow: "1px 2px 3px 2px orange"}}>
  <a href="https://my-color-converter.netlify.app/rgb-hex" target="_blank">
  <div class="img-wrapper">
  <img class="card-img" src="./images/onion.jpg"/>
  </div>
  <p>Onion</p> </a>
</div>

<div class="card" style={{boxShadow: "1px 2px 3px 2px violet"}}>
  <a href="https://my-time-stamp-converter.netlify.app/epochtohuman" target="_blank">
  <div class="img-wrapper">
  <img class="card-img" src="./images/cabbage.jpg"/>
</div>
  
  <p>Cabbage</p></a>
</div>

<div class="card" style={{boxShadow: "1px 2px 3px 2px blue"}}>
  <a href="https://my-number-base-converter.netlify.app/decimaltobinary" target="_blank">
  <div class="img-wrapper">
  <img class="card-img" src="./images/cauliflower.jpg"/>
</div>
  <p>Cauliflower</p></a>
</div>

<div class="card" style={{boxShadow: "1px 2px 3px 2px black"}}>
  <a href="https://my-string-utilities.netlify.app/stringutilities" target="_blank">
  <div class="img-wrapper">
  <img class="card-img" src="./images/carrot.jpg"/>
</div>
<p>Carrot</p></a>
</div>

  
<div class="card" style={{boxShadow: "1px 2px 3px 2px green"}}>
  <a href="https://my-unit-converter.netlify.app/temperature.html" target="_blank">
  <div class="img-wrapper">
  <img class="card-img" src="./images/banana.jpg"/>
</div>
  <p>Banana</p></a>
</div>  

<div class="card" style={{boxShadow: "1px 2px 3px 2px green"}}>
  <a href="https://my-unit-converter.netlify.app/temperature.html" target="_blank">
  <div class="img-wrapper">
  <img class="card-img" src="./images/apple.jpg"/>
</div>
  <p>Apple</p></a>
</div> 

  </main>

    </div>
    
  );
}

export default Product;