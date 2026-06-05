import React, { useEffect, useState } from "react";

function ApiCalling() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));

  }, []);
  return (
    <div className="main-container">

      <h1 className="heading">E-Commerce Store</h1>

      <div className="product-container">

        {products.map((product) => (

          <div className="card" key={product.id}>

            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />

            <h2>{product.title}</h2>

            <p className="price">${product.price}</p>

            <button className="btn">
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ApiCalling;