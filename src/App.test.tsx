import React from 'react';
import { render, screen } from '@testing-library/react'; // Update import statement
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([]);
const store = mockStore({});

test('renders Home component', () => {
  render(
    <Provider store={store}>
      <Router initialEntries={['/']}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});

test('renders ProductList component', () => {
  render(
    <Provider store={store}>
      <Router initialEntries={['/products']}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/product list/i)).toBeInTheDocument();
});

test('renders ProductDetails component', () => {
  render(
    <Provider store={store}>
      <Router initialEntries={['/products/1']}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/product details/i)).toBeInTheDocument();
});

test('renders Cart component', () => {
  render(
    <Provider store={store}>
      <Router initialEntries={['/cart']}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/cart/i)).toBeInTheDocument();
});

test('renders Checkout component', () => {
  render(
    <Provider store={store}>
      <Router initialEntries={['/checkout']}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/checkout/i)).toBeInTheDocument();
});

test('renders UserProfile component', () => {
  render(
    <Provider store={store}>
      <Router initialEntries={['/profile']}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/user profile/i)).toBeInTheDocument();
});

test('renders 404 page for unknown route', () => {
  render(
    <Provider store={store}>
      <Router initialEntries={['/unknown']}>
        <App />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/page does not exist/i)).toBeInTheDocument();
});
