/**
 * Composant UserList
 * Gère l'affichage de la liste des utilisateurs avec animations et effets de hover
 */

// Importation des dépendances
import "bootstrap/dist/css/bootstrap.min.css";              // Styles Bootstrap
import React, { useState, useEffect } from "react";         // Hooks React
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";  // Composants Bootstrap
import axios from "axios";                                  // Client HTTP
import "./UserList.css";                                   // Styles personnalisés

const UserList = () => {
  // Gestion des états avec useState
  const [listOfUser, setListOfUser] = useState([]);        // Liste des utilisateurs
  const [loading, setLoading] = useState(true);            // État de chargement
  const [error, setError] = useState(null);                // Gestion des erreurs

  // Effet de bord pour charger les données au montage du composant
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Appel API avec axios
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        // Mise à jour du state avec les données
        setListOfUser(data);
        setLoading(false);
      } catch (err) {
        // Gestion des erreurs
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Tableau de dépendances vide = exécution unique au montage

  // Affichage pendant le chargement
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  // Affichage en cas d'erreur
  if (error) {
    return (
      <div className="text-center text-danger">
        <h3>Error: {error}</h3>
      </div>
    );
  }

  // Rendu principal de la liste des utilisateurs
  return (
    <Container className="py-4">
      {/* Titre avec animation de fondu */}
      <h2 
        className="text-center mb-4 text-custom" 
        data-aos="fade-down"
        data-aos-delay="100"
      >
        User List
      </h2>
      {/* Grille responsive pour les cartes */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {/* Mapping sur la liste des utilisateurs */}
        {listOfUser.map((user, index) => (
          <Col key={user.id}>
            {/* Carte utilisateur avec effets de hover et animations */}
            <Card 
              className="h-100 shadow-sm user-card" 
              data-aos="fade-up"
              data-aos-delay={150 * (index + 1)}
            >
              <Card.Body>
                {/* Titre avec animation */}
                <Card.Title data-aos="fade-right" data-aos-delay={200 * (index + 1)}>
                  {user.name}
                </Card.Title>
                {/* Sous-titre avec animation */}
                <Card.Subtitle className="mb-2 text-danger" data-aos="fade-right" data-aos-delay={250 * (index + 1)}>
                  @{user.username}
                </Card.Subtitle>
                {/* Contenu principal avec animation */}
                <Card.Text data-aos="fade-up" data-aos-delay={300 * (index + 1)}>
                  <strong>Email:</strong> {user.email}
                  <br />
                  <strong>Phone:</strong> {user.phone}
                  <br />
                  <strong>Website:</strong> {user.website}
                  <br />
                  <strong>Company:</strong>{" "}
                  {user.company.name}
                </Card.Text>
                {/* Pied de carte avec animation */}
                <Card.Footer 
                  className="bg-dark text-light border-top-3 border-warning"
                  data-aos="fade-up"
                  data-aos-delay={350 * (index + 1)}
                >
                  <small className="text-transparent">
                    {user.address.street},{" "}
                    {user.address.suite}
                    <br />
                    {user.address.city},{" "}
                    {user.address.zipcode}
                  </small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Copyright footer */}
      <div className="mt-5 ">
        <footer className="text-center mt-5 mb-4 text-muted text-custom-footer">
          <small>&copy; {new Date().getFullYear()} User List App by Cism-Ch. All rights reserved.</small>
        </footer>
      </div>
    </Container>
  );
};

// Export du composant
export default UserList;
