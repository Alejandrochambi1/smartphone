import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import styles from './RegisterPage.module.css';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, error } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      // Handle password mismatch error
      return;
    }
    setIsLoading(true);
    const success = await register(formData.username, formData.email, formData.password);
    if (success) {
      navigate('/login');
    }
    setIsLoading(false);
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <Container fluid className={styles.registerContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Crear cuenta</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group controlId="formBasicUsername">
            <div className={styles.inputGroup}>
              <FaUser className={styles.inputIcon} />
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <div className={styles.inputGroup}>
              <FaEnvelope className={styles.inputIcon} />
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <div className={styles.inputGroup}>
              <FaLock className={styles.inputIcon} />
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => togglePasswordVisibility('password')}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <div className={styles.inputGroup}>
              <FaLock className={styles.inputIcon} />
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmar contraseña"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => togglePasswordVisibility('confirmPassword')}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </Form.Group>

          <Button type="submit" className={styles.formBtn} disabled={isLoading}>
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </Button>
        </Form>
        <p className={styles.loginLabel}>
          ¿Ya tienes una cuenta? <Link to="/login" className={styles.loginLink}>Inicia sesión</Link>
        </p>
      </div>
    </Container>
  );
}

export default RegisterPage;


