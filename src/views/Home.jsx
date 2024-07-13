import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const irAPokemones = () => {
    navigate("/pokemones");
  };

  return (
    <Container className="text-center mt-5">
      <h1>Bienvenido Maestro Pokemón</h1>
      <div className="photo">
        <img src="../Foto_Home.jpeg" alt="Ash con Pokemones" />
      </div>
      <button className="btn btn-secondary mt-4" onClick={irAPokemones}>
        Buscar un pokemon
      </button>
    </Container>
  );
}

export default Home;
