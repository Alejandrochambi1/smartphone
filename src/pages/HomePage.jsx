import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { products, brands } from '../data/products.js';
import ProductCard from '../Components/ProductCard';
import styles from './HomePage.module.css';

function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const featuredBrands = brands.slice(0, 6);

  return (
    <div className={styles.homePage}>
      <Carousel className={styles.mainCarousel} interval={2000}>
        <Carousel.Item>
          <div className={styles.carouselImageContainer}>
            <img className={styles.carouselImage} src="/images/img/FONDO/Fondo1.jpeg" alt="First slide" />
          </div>
          <Carousel.Caption className={styles.carouselCaption}>
            <h2>Descubre lo último en tecnología</h2>
            <Link to="/products" className={styles.ctaButton}>Ver Productos</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouselImageContainer}>
            <img className={styles.carouselImage} src="/images/img/FONDO/1.png" alt="Second slide" />
          </div>
          <Carousel.Caption className={styles.carouselCaption}>
            <h2>Ofertas Especiales</h2>
            <Link to="/offers" className={styles.ctaButton}>Ver Ofertas</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouselImageContainer}>
            <img className={styles.carouselImage} src="/images/img/FONDO/2.png" alt="Third slide" />
          </div>
          <Carousel.Caption className={styles.carouselCaption}>
            <h2>Explora Nuestras Marcas</h2>
            <Link to="/brands" className={styles.ctaButton}>Ver Marcas</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className={styles.featuredProducts}>
        <h2 className={styles.sectionTitle}>Productos Destacados</h2>
        <Row>
          {featuredProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className={styles.brandsShowcase}>
        <h2 className={styles.sectionTitle}>Nuestras Marcas</h2>
        <div className={styles.brandLogosContainer}>
          {featuredBrands.map((brand) => (
            <div key={brand.id} className={styles.brandLogoWrapper}>
              <img src={brand.logo} alt={brand.name} className={styles.brandLogo} />
              <Link to={`/brands/${brand.name.toLowerCase()}`} className={styles.brandButton}>
                Ver productos
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.viewAllBrands}>
          <Link to="/brands" className={styles.ctaButton}>Ver todas las marcas</Link>
        </div>
      </Container>

      <Container className={styles.qualitySection}>
        <Row className={styles.qualityContent}>
          <Col md={6}>
            <h2 className={styles.sectionTitle}>La Mejor Calidad</h2>
            <p className={styles.qualityDescription}>Ofrecemos productos de las mejores marcas con garantía y soporte técnico. Nuestro compromiso es brindar la mejor experiencia de compra y servicio post-venta.</p>
            <Button as={Link} to="/about" className={styles.learnMoreButton}>Conoce más</Button>
          </Col>
          <Col md={6}>
            <div className={styles.qualityImageWrapper}>
              <img src="/images/img/FONDO/FONDOCA.jpeg" alt="Calidad" className={styles.qualityImage} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;