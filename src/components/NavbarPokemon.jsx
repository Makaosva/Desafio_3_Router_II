import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarPokemon() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Navbar.Brand>
        {" "}
        <img className="icono" src="../pokebola.png" alt="" />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact className={setActiveClass}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/pokemones" className={setActiveClass}>
            Pokemones
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPokemon;
