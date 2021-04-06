import React from 'react';
import './Product.css';
import './index.css';
import { Link } from 'react-router-dom';

function Product (){


  return (
    <div>
      <h1 style ={{textAlign: "center"}}>Most popular</h1>
      <main class="main-content">
<div class="card">
  <Link to="/products/605a37864a2a8cb97b9fd67b">
  <div class="img-wrapper">
  <img class="card-img" src="/images/Potato.jpg"/>
</div>
  <p>Potato</p></Link>
  
</div>


<div class="card" >
  <Link to="/products/605a37864a2a8cb97b9fd67c">
  <div class="img-wrapper">
  <img class="card-img" src="/images/Onion.jpg"/>
  </div>
  <p>Onion</p> </Link>
</div>

<div class="card" >
  <Link to="/products/605a37864a2a8cb97b9fd67d" >
  <div class="img-wrapper">
  <img class="card-img" src="/images/Cabbage.jpg"/>
</div>
  
  <p>Cabbage</p></Link>
</div>

<div class="card">
  <Link to="/products/605a37864a2a8cb97b9fd67e">
  <div class="img-wrapper">
  <img class="card-img" src="/images/Cauliflower.jpg"/>
</div>
  <p>Cauliflower</p></Link>
</div>

<div class="card" >
<Link to="/products/605a38634a2a8cb97b9fd67f">
  <div class="img-wrapper">
  <img class="card-img" src="/images/Carrot.jpg"/>
</div>
<p>Carrot</p></Link>
</div>

  
<div class="card" >
<Link to="/products/605a38634a2a8cb97b9fd680">
  <div class="img-wrapper">
  <img class="card-img" src="/images/Banana.jpg"/>
</div>
  <p>Banana</p></Link>
</div>  

<div class="card">
  <Link to="/products/605a3cd94a2a8cb97b9fd685" >
  <div class="img-wrapper">
  <img class="card-img" src="/images/Fish.jpg"/>
</div>
  <p>Fish</p></Link>
</div> 

<div class="card">
  <Link to="/products/605a3dc44a2a8cb97b9fd692" >
  <div class="img-wrapper">
  <img class="card-img" src="/images/Chicken-Biryani.jpg"/>
</div>
  <p>Chicken Biryani</p></Link>
</div>

<div class="card">
  <Link to="/products/605a3d914a2a8cb97b9fd68b" >
  <div class="img-wrapper">
  <img class="card-img" src="/images/Sandwich.jpg"/>
</div>
  <p>Sandwich</p></Link>
</div>

<div class="card">
  <Link to="/products/605a3d914a2a8cb97b9fd689" >
  <div class="img-wrapper">
  <img class="card-img" src="/images/Eggs.jpg"/>
</div>
  <p>Eggs</p></Link>
</div>


  </main>

    </div>
    
  );
}

export default Product;