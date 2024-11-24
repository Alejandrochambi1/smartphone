import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { FaPaypal, FaQrcode, FaWhatsapp, FaCreditCard, FaDownload } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import styles from './PaymentProcess.module.css';

const PaymentProcess = ({ show, handleClose, cartItems }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [comprobante, setComprobante] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const { clearCart } = useCart();
  
  const fileInputRef = useRef(null);
  const qrImageRef = useRef(null);

  const [total, setTotal] = useState(0);
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
    setTotal(newTotal);
  }, [cartItems]);

  useEffect(() => {
    if (show) {
      setPaymentMethod('');
      setShowQR(false);
      setComprobante(null);
      setPaymentConfirmed(false);
    }
  }, [show]);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setShowQR(method === 'qr');
  };

  const handleFileUpload = (event) => {
    setComprobante(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentMethod !== 'whatsapp') {
      const paymentInfo = {
        method: paymentMethod,
        items: cartItems,
        total: total,
        date: new Date().toISOString(),
        comprobante: comprobante ? comprobante.name : null
      };
      setPaymentHistory(prevHistory => [...prevHistory, paymentInfo]);
      console.log('Historial de pagos:', [...paymentHistory, paymentInfo]);
      setPaymentConfirmed(true);
      clearCart();
    } else {
      handleClose();
    }
  };

  const downloadQR = () => {
    if (qrImageRef.current) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = qrImageRef.current.width;
      canvas.height = qrImageRef.current.height;
      ctx.drawImage(qrImageRef.current, 0, 0);
      
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const handleModalClose = () => {
    handleClose();
    setPaymentMethod('');
    setShowQR(false);
    setComprobante(null);
    setPaymentConfirmed(false);
  };

  const whatsappNumber = '1234567890';

  return (
    <Modal show={show} onHide={handleModalClose} centered size="lg" className={styles.paymentModal}>
      <Modal.Header closeButton>
        <Modal.Title>Proceder al pago</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {paymentConfirmed ? (
          <div className={styles.confirmationMessage}>
            <h4>¡Compra exitosa!</h4>
            <p>Gracias por tu compra. Tu pedido ha sido procesado correctamente.</p>
            <Button variant="primary" onClick={handleModalClose}>Cerrar</Button>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <div className={styles.paymentOptions}>
              {['card', 'qr', 'whatsapp'].map((method) => (
                <Button
                  key={method}
                  variant="outline-primary"
                  className={`${styles.paymentButton} ${paymentMethod === method ? styles.active : ''}`}
                  onClick={() => handlePaymentMethodChange(method)}
                >
                  {method === 'card' && <FaCreditCard />}
                  {method === 'qr' && <FaQrcode />}
                  {method === 'whatsapp' && <FaWhatsapp />}
                  <span>{method === 'card' ? 'Tarjeta' : method.toUpperCase()}</span>
                </Button>
              ))}
            </div>

            <div className={styles.orderSummary}>
              <h4>Resumen del pedido</h4>
              {cartItems.map((item, index) => (
                <div key={index} className={styles.orderItem}>
                  <span>{item.name}</span>
                  <span>${item.price?.toFixed(2) || '0.00'}</span>
                </div>
              ))}
              <div className={styles.orderTotal}>
                <strong>Total a pagar:</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className={styles.cardPayment}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="cardNumber">
                      <Form.Label>Número de tarjeta</Form.Label>
                      <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="cardName">
                      <Form.Label>Nombre en la tarjeta</Form.Label>
                      <Form.Control type="text" placeholder="John Doe" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="cardExpiry">
                      <Form.Label>Fecha de expiración</Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="cardCVC">
                      <Form.Label>CVC</Form.Label>
                      <Form.Control type="text" placeholder="123" required />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            )}

            {showQR && (
              <div className={styles.qrCode}>
                <div className={styles.qrImageWrapper}>
                  <img ref={qrImageRef} src="/images/img/FONDO/QR.jpeg" alt="QR Code" className={styles.qrImage} />
                </div>
                <Button onClick={downloadQR} className={styles.downloadButton}>
                  <FaDownload className={styles.icon} />
                  <span className={styles.label}>Descargar QR</span>
                </Button>
                <Form.Group controlId="comprobante" className="mt-3">
                  <Form.Label>Subir comprobante de pago</Form.Label>
                  <div className={styles.uploadButton}>
                    <input 
                      type="file" 
                      onChange={handleFileUpload} 
                      accept="image/*" 
                      id="comprobante" 
                      className={styles.fileInput} 
                      ref={fileInputRef}
                    />
                    <label htmlFor="comprobante" className={styles.customFileUpload}>
                      <div className={styles.addIcon}></div>
                      <div className={styles.btnTxt}>
                        {comprobante ? comprobante.name : 'Agregar foto'}
                      </div>
                    </label>
                  </div>
                </Form.Group>
              </div>
            )}

            {paymentMethod === 'whatsapp' && (
              <div className={styles.whatsappContact}>
                <p>Haz clic en el botón para contactarnos por WhatsApp y realizar tu reserva:</p>
                <a 
                  href={`https://wa.link/t65d6j?text=Hola, quiero realizar un pago de $${total.toFixed(2)} por los siguientes productos: ${cartItems.map(item => item.name).join(', ')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.whatsappButton}
                >
                  <FaWhatsapp /> Contactar por WhatsApp
                </a>
              </div>
            )}

            <Button 
              variant="primary" 
              type="submit" 
              className={`${styles.submitButton} mt-3`} 
              disabled={!paymentMethod || (paymentMethod === 'qr' && !comprobante)}
            >
              {paymentMethod === 'whatsapp' ? 'Cerrar' : 'Confirmar Pago'}
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PaymentProcess;





