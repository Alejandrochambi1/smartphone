import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext.jsx';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  return (
    <Container className={styles.profileContainer}>
      <Card className={styles.profileCard}>
        <Card.Body>
          <Card.Title className={styles.profileTitle}>Mi Perfil</Card.Title>
          <Card.Text>
            <strong>Nombre de usuario:</strong> {user.username}
          </Card.Text>
          <Card.Text>
            <strong>Correo electrónico:</strong> {user.email}
          </Card.Text>
          {/* Aquí puedes agregar más información del perfil si lo deseas */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProfilePage;