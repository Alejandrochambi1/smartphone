import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { brands } from '../data/products.js';
import { FaStar, FaMobile, FaHeadphones } from 'react-icons/fa';
import styles from './BrandsPage.module.css';

const BrandsPage = () => {
  const featuredBrand = brands[0]; // Assuming the first brand is featured

  return (
    <Container fluid className={styles.brandsPage}>
      <Container>
        <h1 className={styles.title}>Nuestras Marcas</h1>
        
        <div className={styles.introduction}>
          <p>Descubre la excelencia en tecnología móvil con nuestra selección de marcas líderes. Cada una ofrece innovación, calidad y estilo único para satisfacer tus necesidades.</p>
        </div>

        <div className={styles.featuredBrand}>
          <h2>Marca Destacada</h2>
          <Row className={styles.featuredContent}>
            <Col md={6}>
              <img src={featuredBrand.logo} alt={`${featuredBrand.name} logo`} className={styles.featuredLogo} />
            </Col>
            <Col md={6}>
              <h3>{featuredBrand.name}</h3>
              <p>Descubre lo último en innovación y diseño con nuestra marca destacada. {featuredBrand.name} ofrece productos de vanguardia que transformarán tu experiencia móvil.</p>
              <Link to={`/brands/${featuredBrand.name.toLowerCase()}`} className={styles.featuredLink}>
                Ver productos de {featuredBrand.name}
              </Link>
            </Col>
          </Row>
        </div>

        <div className={styles.statsSection}>
          <Row>
            <Col md={4}>
              <div className={styles.statItem}>
                <FaStar className={styles.statIcon} />
                <h4>Calidad Garantizada</h4>
                <p>Todas nuestras marcas ofrecen garantía de calidad</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.statItem}>
                <FaMobile className={styles.statIcon} />
                <h4>Amplia Selección</h4>
                <p>Más de 1000 modelos de smartphones disponibles</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.statItem}>
                <FaHeadphones className={styles.statIcon} />
                <h4>Soporte Premium</h4>
                <p>Asistencia técnica especializada para cada marca</p>
              </div>
            </Col>
          </Row>
        </div>

        <h2 className={styles.subtitle}>Explora Todas Nuestras Marcas</h2>
        <Row className={styles.brandGrid}>
          {brands.map((brand) => (
            <Col key={brand.id} xs={6} sm={4} md={3} lg={2} className="mb-4">
              <Link to={`/brands/${brand.name.toLowerCase()}`} className={styles.brandLink}>
                <div className={styles.brandCard}>
                  <div className={styles.brandLogoWrapper}>
                    <img src={brand.logo} alt={`${brand.name} logo`} className={styles.brandLogo} />
                  </div>
                  <h3 className={styles.brandName}>{brand.name}</h3>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default BrandsPage;