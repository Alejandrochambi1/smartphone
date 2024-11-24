import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { getProductsByBrand } from '../data/products';
import ProductCard from '../Components/ProductCard';
import styles from './BrandProductsPage.module.css';

const BrandProductsPage = () => {
  const { brandName } = useParams();
  const products = getProductsByBrand(brandName);

  return (
    <Container className={styles.brandProductsPage}>
      <h1 className={styles.title}>Productos de {brandName}</h1>
      {products.length === 0 ? (
        <p>No se encontraron productos para esta marca.</p>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default BrandProductsPage;


