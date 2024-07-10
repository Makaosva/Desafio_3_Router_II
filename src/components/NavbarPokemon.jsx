import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarPokemon() {
  const setActiveClass = ({ isActive }) =>
    isActive ? "active text-decoration-none p-3" : undefined;

  return (
    <Navbar bg="secondary" data-bs-theme="ligth">
      <Container fluid className="justify-content-start">
        <Navbar.Brand>
          {" "}
          <img className="icono" src="../pokebola.png" alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <NavLink className={setActiveClass} to="/">
            Home
          </NavLink>

          <NavLink className={setActiveClass} to="/pokemones">
            Pokemones
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPokemon;
