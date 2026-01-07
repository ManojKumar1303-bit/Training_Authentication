import React from "react";
import { Navigate } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          Access Denied Please login to continue.
        </Alert>
        <Navigate to="/login" replace />
      </Container>
    );
  }

  return children;
};

export default ProtectedRoute;
