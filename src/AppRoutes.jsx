import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import HomePage
from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import CelularesPage from './pages/CelularesPage';
import TabletsPage from './pages/TabletsPage';
import AccesoriosPage from './pages/AccesoriosPage';
import BrandsPage from './pages/BrandsPage';
import BrandProductsPage from './pages/BrandProductsPage';
import ContactPage from './pages/ContactPage';
import OffersPage from './pages/OffersPage';
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProfilePage from './pages/ProfilePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/products" element={<ProtectedRoute><ProductsPage /></ProtectedRoute>} />
      <Route path="/products/:category" element={<ProtectedRoute><ProductsPage /></ProtectedRoute>} />
      <Route path="/products/celulares" element={<ProtectedRoute><CelularesPage /></ProtectedRoute>} />
      <Route path="/products/tablets" element={<ProtectedRoute><TabletsPage /></ProtectedRoute>} />
      <Route path="/products/accesorios" element={<ProtectedRoute><AccesoriosPage /></ProtectedRoute>} />
      <Route path="/brands" element={<ProtectedRoute><BrandsPage /></ProtectedRoute>} />
      <Route path="/brands/:brandName" element={<ProtectedRoute><BrandProductsPage /></ProtectedRoute>} />
      <Route path="/offers" element={<ProtectedRoute><OffersPage /></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><ContactPage /></ProtectedRoute>} />
      <Route path="/support" element={<ProtectedRoute><SupportPage /></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
      <Route path="/product/:id" element={<ProtectedRoute><ProductDetailPage /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;


