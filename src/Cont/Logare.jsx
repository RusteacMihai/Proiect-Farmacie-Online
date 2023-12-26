import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";
import { useNavigate } from "react-router-dom";
import { Container } from "./Logare.style";

export const Logare = () => {
  const [users, setUsers] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3002/users`)
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  const logare = () => {
    let isOk = false;

    users.map((user) => {
      if (user.email === email && user.password === password) {
        isOk = true;
      }
    });

    if (isOk) {
      navigate("/user");
    } else {
      alert("Eroare");
    }
  };

  return (
    <div>
      <NavBar isGuest={true} />
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Pastreaza-ma logat" />
          </Form.Group>

          <Button onClick={logare} variant="primary" type="button">
            Autentificare
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};
