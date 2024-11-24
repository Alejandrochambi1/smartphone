import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import styles from './ForgotPasswordPage.module.css';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setError(error.response?.data?.error || 'Ocurrió un error. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className={styles.forgotPasswordContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Recuperar Contraseña</h1>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group controlId="formBasicEmail">
            <div className={styles.inputGroup}>
              <FaEnvelope className={styles.inputIcon} />
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
            </div>
          </Form.Group>

          <Button type="submit" className={styles.formBtn} disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar enlace de recuperación'}
          </Button>
        </Form>
        <p className={styles.loginLabel}>
          ¿Recordaste tu contraseña? <Link to="/login" className={styles.loginLink}>Inicia sesión</Link>
        </p>
      </div>
    </Container>
  );
}

export default ForgotPasswordPage;


