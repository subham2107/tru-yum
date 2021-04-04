import React from 'react';
import './Product.css';

function Product (){

  // const input=document.querySelector('#input');
  // const buttonMinus = document.querySelector('#button-minus');
  // buttonMinus.addEventListener('click', event => {
  //             input.value--;
  // });
  // const buttonPlus = document.querySelector('#button-plus');
  // buttonPlus.addEventListener('click', event => {
  //             input.value++;
  // });

  return (
    <div>
      <h1 style ={{textAlign: "center"}}>Most popular</h1>
      <main class="main-content">
<div class="card">
  <a href="/products/605a37864a2a8cb97b9fd67b">
  <div class="img-wrapper">
  <img class="card-img" src="/images/Potato.jpg"/>
</div>
  <p>Potato</p></a>
  {/* <input type="button" id="button-minus" value="-"/>
    <input type="text" id="input" value="0"/>
    <input type="button" id="button-plus" value="+"/> */}
</div>


<div class="card" >
  <a href="/products/605a37864a2a8cb97b9fd67c">
  <div class="img-wrapper">
  <img class="card-img" src="/images/Onion.jpg"/>
  </div>
  <p>Onion</p> </a>
</div>

<div class="card" >
  <a href="/products/605a37864a2a8cb97b9fd67d" >
  <div class="img-wrapper">
  <img class="card-img" src="/images/Cabbage.jpg"/>
</div>
  
  <p>Cabbage</p></a>
</div>

<div class="card">
  <a href="/products/605a37864a2a8cb97b9fd67e">
  <div class="img-wrapper">
  <img class="card-img" src="/images/Cauliflower.jpg"/>
</div>
  <p>Cauliflower</p></a>
</div>

<div class="card" >
<a href="/products/605a38634a2a8cb97b9fd67f">
  <div class="img-wrapper">
  <img class="card-img" src="/images/Carrot.jpg"/>
</div>
<p>Carrot</p></a>
</div>

  
<div class="card" >
<a href="/products/605a38634a2a8cb97b9fd680">
  <div class="img-wrapper">
  <img class="card-img" src="/images/Banana.jpg"/>
</div>
  <p>Banana</p></a>
</div>  

<div class="card">
  <a href="/products/605a38634a2a8cb97b9fd681" >
  <div class="img-wrapper">
  <img class="card-img" src="/images/Apple.jpg"/>
</div>
  <p>Apple</p></a>
</div> 


  </main>

    </div>
    
  );
}

export default Product;