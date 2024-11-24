import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container className={`${styles.contactPage} py-5`}>
      <Row>
        <Col lg={6}>
          <h1 className={styles.title}>Contáctanos</h1>
          <p className={styles.description}>
            Estamos aquí para ayudarte. Envíanos tus comentarios o preguntas y te responderemos lo antes posible.
          </p>
          {submitted && (
            <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
              Gracias por tu mensaje. Nos pondremos en contacto contigo pronto!
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </Form.Group>
            <Button type="submit" className={styles.submitButton}>
              <FaPaperPlane className={styles.buttonIcon} />
              <span>Enviar Mensaje</span>
            </Button>
          </Form>
        </Col>
        <Col lg={6} className={`${styles.contactInfo} mt-4 mt-lg-0`}>
          <h2>Información de Contacto</h2>
          <ul className={styles.contactList}>
            <li>
              <FaWhatsapp className={styles.icon} />
              <a href="https://wa.link/t65d6j" target="_blank" rel="noopener noreferrer">
                WhatsApp: +591 78233676
              </a>
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              <a href="www.smartphone.com">www.smartphone.com</a>
            </li>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              123 Calle Principal, Tarija, Bolivia
            </li>
          </ul>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3037455068656!2d-68.13398368255615!3d-16.495986899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21bd3024f007%3A0x2a74f58e90d5e125!2sCentro%20de%20La%20Paz!5e0!3m2!1ses!2sbo!4v1679941718090!5m2!1ses!2sbo"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;