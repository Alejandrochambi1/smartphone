import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { getProductsByCategory, products } from '../data/products';
import { useCart } from '../context/CartContext';
import styles from './ProductsPage.module.css';

function ProductsPage() {
  const { category } = useParams();
  const [displayProducts, setDisplayProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = () => {
      if (category) {
        const categoryProducts = getProductsByCategory(category);
        setDisplayProducts(categoryProducts);
      } else {
        setDisplayProducts(products);
      }
    };

    fetchProducts();
  }, [category]);

  const filteredProducts = displayProducts.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container fluid className={styles.productsPage}>
      <h1 className={styles.title}>
        {category ? `Productos / ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Todos los Productos'}
      </h1>
      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <InputGroup className={styles.searchGroup}>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Buscar productos..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className={styles.productCol}>
            <div className={styles.card}>
              <div className={styles.bg}></div>
              <div className={styles.blob}></div>
              <div className={styles.content}>
                <div className={styles.imageWrapper}>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>${product.price}</p>
                <button 
                  className={styles.btn}
                  onClick={() => addToCart(product)}
                >
                  Añadir al Carrito
                </button>
                <Link to={`/product/${product.id}`} className={styles.detailsLink}>Ver Detalles</Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsPage;
