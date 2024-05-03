import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { appsData, productsData } from './data.js';
import Home from './pages/Home/Home';
import ProductsPage from './pages/Products/ProductsPage';
import ViewProductPage from './pages/ViewProduct/ViewProductPage';
import './App.css'
import EditProductPage from './pages/EditProduct/EditProduct.jsx';

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [apps, setApps] = useState(appsData);

  console.log({ products, apps });

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((p) => {
      if (p.id !== updatedProduct.id) return p
        return { ...updatedProduct }
      })
    setProducts(updatedProducts)
  }

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>

        <Route
          path='/products/:id/edit'
          element={<EditProductPage updateProduct={updateProduct} />}
        />

        <Route
          path="/products/:id" 
          element={<ViewProductPage products={products} />} 
         />

        <Route 
          path="/products" 
          element={<ProductsPage products={products} />}
        />

        <Route 
          path="/" 
          element={<Home />} 
        />

      </Routes>
    </div>
  );
}
