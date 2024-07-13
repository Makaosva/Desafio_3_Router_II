import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";

function DetallePokemon() {
  const POKES_URL = "https://pokeapi.co/api/v2/pokemon";
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const irAPokemones = () => {
    navigate("/pokemones");
  };

  const obtenerPokemon = async () => {
    const res = await fetch(`${POKES_URL}/${name}`);
    const data = await res.json();
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    obtenerPokemon();
  }, [name]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container className="mt-5 text-center">
      <h1>Detalle Pokemon</h1>
      <Card className="p-3 poke-card">
        <Row>
          <Col md={6}>
            <Card.Img
              className="pokemon-img"
              src={pokemon.sprites.other.home.front_default}
            />
          </Col>
          <Col md={6}>
            <Card.Body className="text-start">
              <Card.Title className="fw-bolder">{pokemon.name}</Card.Title>
              <ul>
                <Card.Text>
                  {pokemon.stats.map((stat, i) => (
                    <li key={i}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </Card.Text>
                <br />
                <Card.Title className="fw-bold">type:</Card.Title>
                <Card.Text>
                  {pokemon.types.map((type, i) => (
                    <li key={i}>{type.type.name}</li>
                  ))}
                </Card.Text>
              </ul>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <button className="btn btn-secondary mt-4" onClick={irAPokemones}>
        Volver a buscar un pokemon
      </button>
    </Container>
  );
}

export default DetallePokemon;
