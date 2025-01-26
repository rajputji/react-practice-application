import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const API_URL = 'https://fakestoreapi.com/products';

interface Product {
  id?: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const Shimmer: React.FC = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        <div className="shimmer-image"></div>
      </div>
      <div className="col-md-6">
        <div className="shimmer-title"></div>
        <div className="shimmer-price"></div>
        <div className="shimmer-description"></div>
        <div className="shimmer-button"></div>
      </div>
    </div>
  </div>
);

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000)); // 5-second delay
      const response = await axios.get<Product>(`${API_URL}/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ productId: product.id!.toString(), quantity: 1 }));
    }
  };

  if (!product) {
    return <Shimmer />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
