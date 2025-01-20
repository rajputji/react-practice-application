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

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get<Product>(`${API_URL}/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ productId: product.id!.toString(), quantity: 1 }));
    }
  };

  if (!product) {
    return <p>Loading...</p>;
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
