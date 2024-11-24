import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { getProductById } from '../data/products';
import { productImages } from '../data/productImages';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaCheckCircle, FaTimesCircle, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import styles from './ProductDetailPage.module.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(parseInt(id));
      setProduct(fetchedProduct);
      setSelectedColor(fetchedProduct.colors[0]);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Cargando detalles del producto...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, selectedColor });
  };

  const productImagesArray = [product.image, ...(productImages[product.id] || [])];

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className={styles.starFilled} />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className={styles.starHalf} />);
      } else {
        stars.push(<FaStar key={i} className={styles.starEmpty} />);
      }
    }
    return stars;
  };

  return (
    <Container fluid className={styles.productDetailPage}>
      <Row className={styles.mainContent}>
        <Col lg={6} className={styles.imageColumn}>
          <div className={styles.imageCarouselWrapper}>
            <Carousel 
              className={styles.imageCarousel} 
              interval={2000}
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            >
              {productImagesArray.map((image, index) => (
                <Carousel.Item key={index}>
                  <div className={styles.carouselImageWrapper}>
                    <img className={styles.carouselImage} src={image} alt={`${product.name} ${index + 1}`} />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            <div className={styles.thumbnailContainer}>
              {productImagesArray.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className={`${styles.thumbnail} ${index === activeIndex ? styles.activeThumbnail : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.productInfo}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.productBrand}>Marca: {product.brand}</p>
            <div className={styles.ratingSection}>
              {renderRatingStars(product.rating)}
              <span className={styles.ratingText}>({product.reviews} reseñas)</span>
            </div>
            <div className={styles.priceSection}>
              <span className={styles.currentPrice}>
                ${product.offerPrice || product.price}
              </span>
              {product.offerPrice && product.offerPrice < product.price && (
                <>
                  <span className={styles.originalPrice}>${product.price}</span>
                  <span className={styles.discount}>
                    {Math.round((1 - product.offerPrice / product.price) * 100)}% OFF
                  </span>
                </>
              )}
            </div>
            <div className={styles.stockInfo}>
              {product.inStock ? (
                <p className={styles.inStock}><FaCheckCircle /> En stock</p>
              ) : (
                <p className={styles.outOfStock}><FaTimesCircle /> Agotado</p>
              )}
            </div>
            <p className={styles.productDescription}>{product.longDescription}</p>
            <div className={styles.colorSelection}>
              <h3>Colores disponibles:</h3>
              <ul className={styles.colorsList}>
                {product.colors.map((color) => (
                  <li
                    key={color}
                    className={`${styles.colorItem} ${selectedColor === color ? styles.selectedColor : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></li>
                ))}
              </ul>
            </div>
            <button 
              className={styles.addToCartButton}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <span className={styles.buttonText}>
                <FaShoppingCart className={styles.cartIcon} />
                {product.inStock ? 'Añadir al Carrito' : 'Agotado'}
              </span>
            </button>
          </div>
        </Col>
      </Row>
      <Row className={styles.specificationSection}>
        <Col>
          <h2 className={styles.specsTitle}>Especificaciones</h2>
          <div className={styles.specsList}>
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className={styles.specItem}>
                <div className={styles.specIcon}>
                  <FaCheckCircle />
                </div>
                <div className={styles.specContent}>
                  <h3 className={styles.specKey}>{key}</h3>
                  <p className={styles.specValue}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;