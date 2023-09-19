import React, { useEffect, useState } from "react";

function Hero() {

    const [products, setProducts] = useState([]);
     useEffect(() => {
       fetch("https://fakestoreapi.com/products")
         .then((res) => res.json())
         .then((json) => setProducts(json));
     }, []);
  return (
   
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
   
  );
}

export default Hero;
