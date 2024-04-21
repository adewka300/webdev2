import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} style={{ width: "100px" }} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;