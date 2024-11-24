import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="main-content">
          <Header />
          <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;





