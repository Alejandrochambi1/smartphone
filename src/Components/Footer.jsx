import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`${styles.footer} py-5`}>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h2 className={styles.brandName}>
              <span className={styles.gradientText}>SmartPhone</span>
            </h2>
            <p className={styles.tagline}>Innovación en tus manos</p>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <div className={styles.linkGrid}>
              <Link to="/about" className={`${styles.footerLink} ${styles.buttonpro}`}><span>Nosotros</span></Link>
              <Link to="/products" className={`${styles.footerLink} ${styles.buttonpro}`}><span>Productos</span></Link>
              <Link to="/support" className={`${styles.footerLink} ${styles.buttonpro}`}><span>Soporte</span></Link>
              <Link to="/contact" className={`${styles.footerLink} ${styles.buttonpro}`}><span>Contacto</span></Link>
            </div>
          </Col>
          <Col lg={4} md={12} className={`${styles.socialCol} mt-4 mt-lg-0`}>
            <div className={styles.card}>
              <a href="https://www.instagram.com/tienda_celular/profilecard/?igsh=MnNwcXF4eGxia3Nu" target="_blank" rel="noopener noreferrer" className={`${styles.socialContainer} ${styles.containerOne}`} aria-label="Instagram">
                <FaInstagram className={styles.socialSvg} />
              </a>
              <a href="https://x.com/samsungmobile" target="_blank" rel="noopener noreferrer" className={`${styles.socialContainer} ${styles.containerTwo}`} aria-label="Twitter">
                <FaTwitter className={styles.socialSvg} />
              </a>
              <a href="https://m.facebook.com/SamsungBolivia/" target="_blank" rel="noopener noreferrer" className={`${styles.socialContainer} ${styles.containerThree}`} aria-label="Facebook">
                <FaFacebook className={styles.socialSvg} />
              </a>
              <a href="https://wa.link/t65d6j" target="_blank" rel="noopener noreferrer" className={`${styles.socialContainer} ${styles.containerFour}`} aria-label="WhatsApp">
                <FaWhatsapp className={styles.socialSvg} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <p className={styles.copyright}>&copy; 2024 SmartPhone. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;