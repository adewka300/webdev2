import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/api';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    loadProducts();
  }, []);

  return (
    <div>
      {products.map(product => <Product key={product.id} product={product} />)}
    </div>
  );
};

export default ProductList;