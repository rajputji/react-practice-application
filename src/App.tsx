import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { initializeProducts } from './redux/slices/productSlice';
import { AppDispatch } from './redux/store'; // Import the correct type for dispatch

function App() {
  const dispatch: AppDispatch = useDispatch(); // Use the correct type for dispatch

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<h1>Page does not exist</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
