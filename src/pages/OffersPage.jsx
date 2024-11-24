import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import styles from './OffersPage.module.css';

const OffersPage = () => {
  const { addToCart } = useCart();

  const offers = products.filter(product => product.offerPrice < product.price);

  return (
    <Container fluid className={styles.offersPage}>
      <h1 className={styles.title}>Ofertas Especiales</h1>
      {offers.length > 0 ? (
        <Row className={styles.offerRow}>
          {offers.map((offer) => (
            <Col key={offer.id} xs={12} sm={6} md={4} lg={3} className={`mb-4 ${styles.offerCol}`}>
              <div className={styles.card_box}>
                <span className={styles.offerTag}></span>
                <div className={styles.content}>
                  <div className={styles.imageWrapper}>
                    <img src={offer.image} alt={offer.name} className={styles.offerImage} />
                  </div>
                  <h3 className={styles.offerName}>{offer.name}</h3>
                  <div className={styles.priceContainer}>
                    <p className={styles.originalPrice}>${offer.price}</p>
                    <p className={styles.offerPrice}>${offer.offerPrice}</p>
                  </div>
                  <div className={styles.discountPercentage}>
                    {Math.round((1 - offer.offerPrice / offer.price) * 100)}% OFF
                  </div>
                  <div className={styles.buttonContainer}>
                    <button 
                      className={styles.btn}
                      onClick={() => addToCart({ ...offer, price: offer.offerPrice })}
                    >
                      Añadir al Carrito
                    </button>
                    <Link to={`/product/${offer.id}`} className={styles.detailsLink}>Ver Detalles</Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <p className={styles.noOffers}>No hay ofertas disponibles en este momento.</p>
      )}
    </Container>
  );
};

export default OffersPage;
