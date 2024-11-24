import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../Components/ProductCard';
import styles from './CategoryPage.module.css';

const CelularesPage = () => {
  const celulares = getProductsByCategory('celulares');

  return (
    <Container className={styles.categoryPage}>
      <h1 className={styles.title}>Celulares</h1>
      <Row>
        {celulares.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}  className="mb-4 card-column">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CelularesPage;