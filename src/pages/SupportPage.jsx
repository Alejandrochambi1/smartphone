import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Form, Button } from 'react-bootstrap';
import styles from './SupportPage.module.css';

function SupportPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', contactForm);
    // Reset form after submission
    setContactForm({ name: '', email: '', subject: '', message: '' });
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <Container className={styles.supportPage}>
      <h1 className={styles.title}>Centro de Soporte</h1>
      <Row>
        <Col lg={6}>
          <h2 className={styles.sectionTitle}>Preguntas Frecuentes</h2>
          <Accordion defaultActiveKey="0" className={styles.faqAccordion}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Cuál es el tiempo de entrega de los productos?</Accordion.Header>
              <Accordion.Body>
                Nuestro tiempo de entrega estándar es de 3 a 5 días hábiles. Para entregas urgentes, ofrecemos opciones de envío express con un costo adicional.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Ofrecen garantía en sus productos?</Accordion.Header>
              <Accordion.Body>
                Sí, todos nuestros productos cuentan con garantía del fabricante. Además, ofrecemos una garantía adicional de 30 días por cualquier defecto de fábrica.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Cómo puedo realizar un cambio o devolución?</Accordion.Header>
              <Accordion.Body>
                Puedes solicitar un cambio o devolución dentro de los 14 días posteriores a la recepción del producto. Contáctanos a través de nuestro formulario de soporte o visita una de nuestras tiendas físicas.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col lg={6}>
          <h2 className={styles.sectionTitle}>Contáctanos</h2>
          <Form onSubmit={handleSubmit} className={styles.contactForm}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={contactForm.subject}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className={styles.submitButton}>
              Enviar Mensaje
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SupportPage;