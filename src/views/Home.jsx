import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Bienvenido Maestro Pokemón</h1>
      <div className="photo">
        <img src="../Foto_Home.jpeg" alt="Ash con Pokemones" />
      </div>
    </Container>
  );
}

export default Home;
