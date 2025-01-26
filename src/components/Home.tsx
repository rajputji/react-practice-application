import React from 'react';
import ProductList from './ProductList';

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to ShopKart</h1>
      <div className="text-center mt-4">
      </div>
      <ProductList />
    </div>
  );
};

export default Home;