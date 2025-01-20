import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li key={item.productId} className="list-group-item d-flex justify-content-between align-items-center">
                <span>Product ID: {item.productId}</span>
                <span>Quantity: {item.quantity}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-success">Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
