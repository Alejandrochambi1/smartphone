import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaList, FaHome, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext.jsx';
import PaymentProcess from './PaymentProcess';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css';

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);

  const handleProfileToggle = () => {
    setShowProfile(!showProfile);
    setActiveDropdown(activeDropdown === 'profile' ? null : 'profile');
  };

  const handleProductsToggle = () => {
    setShowProducts(!showProducts);
    setActiveDropdown(activeDropdown === 'products' ? null : 'products');
  };

  const handleLogin = () => {
    navigate('/login');
    handleProfileToggle();
  };

  const handleRegister = () => {
    navigate('/register');
    handleProfileToggle();
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    handleProfileToggle();
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest(`.${styles.headerIcons}, .${styles.navLinks}, .${styles.dropdownContainer}`)) {
        setActiveDropdown(null);
        setShowProfile(false);
        setShowProducts(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  const [showPaymentProcess, setShowPaymentProcess] = useState(false);

  const handlePaymentProcessClose = () => setShowPaymentProcess(false);
  const handlePaymentProcessShow = () => {
    setShowPaymentProcess(true);
    handleCartClose();
  };

  return (
    <Navbar expand="lg" fixed="top" className={`${styles.navbar} py-3`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>
          <h1 className={styles.brandName}>
            <span className={styles.gradientText}>SmartPhone</span>
          </h1>
          <p className={styles.tagline}>Innovación en tus manos</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggle} onClick={handleMenuToggle}>
          <span className={styles.toggleIcon}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? 'show' : ''}>
          <Nav className={`ms-auto ${styles.navLinks}`}>
            <Nav.Link as={Link} to="/" className={`${styles.navLink} ${styles.buttonpro} ${location.pathname === '/' ? styles.active : ''}`}>
              <span><FaHome className="me-2" />Inicio</span>
            </Nav.Link>
            <div className={styles.dropdownContainer}>
              <Button 
                variant="link" 
                className={`${styles.navLink} ${styles.buttonpro} ${location.pathname.includes('/products') ? styles.active : ''}`} 
                onClick={handleProductsToggle}
              >
                <span><FaList className="me-2" />Productos</span>
              </Button>
              {activeDropdown === 'products' && (
                <div className={styles.productsDropdown}>
                  <Button as={Link} to="/products/celulares" variant="link" className={`${styles.productLink} ${styles.buttonpro}`}><span>Celulares</span></Button>
                  <Button as={Link} to="/products/tablets" variant="link" className={`${styles.productLink} ${styles.buttonpro}`}><span>Tablets</span></Button>
                  <Button as={Link} to="/products/accesorios" variant="link" className={`${styles.productLink} ${styles.buttonpro}`}><span>Accesorios</span></Button>
                </div>
              )}
            </div>
            <Nav.Link as={Link} to="/brands" className={`${styles.navLink} ${styles.buttonpro} ${location.pathname === '/brands' ? styles.active : ''}`}><span>Marcas</span></Nav.Link>
            <Nav.Link as={Link} to="/offers" className={`${styles.navLink} ${styles.buttonpro} ${location.pathname === '/offers' ? styles.active : ''}`}><span>Ofertas</span></Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`${styles.navLink} ${styles.buttonpro} ${location.pathname === '/contact' ? styles.active : ''}`}><span>Contacto</span></Nav.Link>
          </Nav>
          <div className={styles.headerIcons}>
            <div className={styles.dropdownContainer}>
              <Button variant="link" className={`${styles.iconButton} ${styles.buttonpro}`} onClick={handleProfileToggle}>
                <span><FaUser /></span>
              </Button>
              {activeDropdown === 'profile' && (
                <div className={styles.profileDropdown}>
                  {user ? (
                    <>
                      <Button as={Link} to="/profile" variant="link" className={`${styles.profileLink} ${styles.buttonpro}`}>
                        <span>Mi Perfil</span>
                      </Button>
                      <Button variant="link" className={`${styles.profileLink} ${styles.buttonpro}`} onClick={handleLogout}>
                        <span><FaSignOutAlt /> Cerrar sesión</span>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="link" className={`${styles.profileLink} ${styles.buttonpro}`} onClick={handleLogin}>
                        <span>Iniciar sesión</span>
                      </Button>
                      <Button variant="link" className={`${styles.profileLink} ${styles.buttonpro}`} onClick={handleRegister}>
                        <span>Registrarse</span>
                      </Button>
                    </>
                  )}
                </div>
              )}
            </div>
            <Button 
              variant="link" 
              onClick={handleCartShow} 
              className={`${styles.iconButton} ${styles.buttonpro}`}
            >
              <span>
                <FaShoppingCart />
                {cart.length > 0 && <span className={styles.cartBadge}>{cart.length}</span>}
              </span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>

      <Offcanvas show={showCart} onHide={handleCartClose} placement="end" className={styles.cartOffcanvas}>
        <Offcanvas.Header className={styles.cartHeader}>
          <Offcanvas.Title>Tu Carrito</Offcanvas.Title>
          <Button variant="link" onClick={handleCartClose} className={styles.closeButton}>
            <FaTimes />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                  <div className={styles.cartItemDetails}>
                    <h5>{item.name}</h5>
                    <p>${item.price}</p>
                  </div>
                  <Button variant="link" onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                    <FaTimes />
                  </Button>
                </div>
              ))}
              <div className={styles.cartTotal}>
                <h4>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h4>
              </div>
              <Button variant="primary" className={`w-100 mb-2 ${styles.checkoutButton}`} onClick={handlePaymentProcessShow}>
                <span>Proceder al pago</span>
              </Button>
              <Button variant="outline-danger" className={`w-100 ${styles.clearCartButton}`} onClick={clearCart}>
                <span>Vaciar carrito</span>
              </Button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      
      <PaymentProcess
        show={showPaymentProcess}
        handleClose={handlePaymentProcessClose}
        total={cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
        cartItems={cart}
      />
    </Navbar>
  );
}

export default Header;

