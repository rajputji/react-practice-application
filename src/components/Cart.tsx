import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, clearCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li key={item.productId} className="list-group-item d-flex justify-content-between align-items-center">
                <span>Product ID: {item.productId}</span>
                <span>Quantity: {item.quantity}</span>
                <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.productId)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button className="btn btn-danger mb-4" onClick={handleClearCart}>
            Clear Cart
          </button>
          <Link to="/checkout" className="btn btn-primary">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
