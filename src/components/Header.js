import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="m-auto">
          <Link className="nav-link" to="/">Movies</Link>
          <Link className="nav-link" to="/moviedetails">Movie Details</Link>
          <Link className="nav-link" to="/contactus">contact us</Link>
          <Link className="nav-link" to="/favorites">Favorite</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
