import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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

  if (error) {
    return (
      <div className="text-center text-danger">
        <h3>Error: {error}</h3>
      </div>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">User List</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {users.map((user) => (
          <Col key={user.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  @{user.username}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Email:</strong> {user.email}
                  <br />
                  <strong>Phone:</strong> {user.phone}
                  <br />
                  <strong>Website:</strong> {user.website}
                  <br />
                  <strong>Company:</strong>{" "}
                  {user.company.name}
                </Card.Text>
                <Card.Footer className="bg-transparent border-top-0">
                  <small className="text-muted">
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
    </Container>
  );
};

export default UserList;
