import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContex';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AddProductPage from './pages/AddProductPage/AddProductsPage';
import EditProductPage from './pages/EditProductPage/EditProductPage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.css';
function App() {
  return (
    <Router>
      <ProductProvider>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productos" element={<ProductsPage />} />
              <Route path="/productos/nuevo" element={<AddProductPage />}
              />
              <Route path="/productos/editar/:id" element={<EditProductPage />} />
              <Route path="/productos/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Sistema de Gestión de Produ
              ctos</p>
          </footer>
        </div>
      </ProductProvider>
    </Router>
  );
}
export default App;