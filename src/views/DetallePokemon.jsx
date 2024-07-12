import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";

function DetallePokemon() {
  const POKES_URL = "https://pokeapi.co/api/v2/pokemon";
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const obtenerPokemon = async () => {
    // setLoading(true);
    const res = await fetch(`${POKES_URL}/${name}`);
    const data = await res.json();
    setPokemon(data);
    setLoading(false);
  };

  console.log("name-->", name);
  console.log("pokemon-->", pokemon);

  useEffect(() => {
    obtenerPokemon();
  }, [name]);

  if (loading) {
    return <Loader />;
  }

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h1>Detalle Pokemon</h1>
      <Container className="mt-5">
        <Card>
          <Row noGutters>
            <Col md={4}>
              <Card.Img
                className="character-img"
                src={pokemon.sprites.other.dream_world.front_default}
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title className="fw-bolder">{pokemon.name}</Card.Title>
                <ul>
                  <Card.Text>
                    {pokemon.stats.map((stat, i) => (
                      <li key={i}>
                        {stat.stat.name}: {stat.base_stat}
                      </li>
                    ))}
                    <h5>
                      Type(s):
                      {pokemon.types.map((type, i) => (
                        <ol key={i}>{type.type.name}</ol>
                      ))}
                    </h5>
                    {/* <h3>{pokemon.types.type.name}</h3> */}
                  </Card.Text>
                </ul>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default DetallePokemon;
