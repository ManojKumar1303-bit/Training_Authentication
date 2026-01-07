import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const AuthNavbar = ({ isLoggedIn, user, login, logout }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Tap the Button to Login in</Navbar.Brand>
        <Nav className="ms-auto">
          {!isLoggedIn ? (
            <Button variant="success" onClick={login}>
              Login
            </Button>
          ) : (
            <>
              <Navbar.Text className="me-3">
                Hi, Hello, Welcome, {user.name}
              </Navbar.Text>
              <Button variant="danger" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AuthNavbar;
