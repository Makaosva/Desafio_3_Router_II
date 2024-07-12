import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function Pokemones() {
  const POKES_URL = "https://pokeapi.co/api/v2/pokemon";
  const [pokemones, setPokemones] = useState([]);
  const [seleccionado, setSeleccionado] = useState();
  const [loading, setLoading] = useState(true);
  const limit = 20; //resultados por pagina
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  const obtenerPokemones = async () => {
    const res = await fetch(`${POKES_URL}?offset=${offset}&limit=${limit}`);
    const data = await res.json();
    setPokemones(data.results);
    setLoading(false);
  };

  useEffect(() => {
    obtenerPokemones();
  }, [offset]);

  if (loading) {
    return <Loader />;
  }

  console.log("pokemones-->", pokemones);
  console.log("seleccionado-->", seleccionado);

  const irAPokemonDetalle = () => {
    if (seleccionado) {
      console.log("dentro if");
      navigate(`/pokemones/${seleccionado}`);
    } else {
      console.log("dentro else");
      alert("Debes seleccionar un pokemon");
    }
  };

  const handleNextPage = () => {
    setOffset(offset + limit); // Aumentar el valor del offset para la siguiente página
  };

  const handlePrevPage = () => {
    if (offset > 0) {
      setOffset(offset - limit); // Disminuir el valor del offset para la página anterior
    }
  };

  const handleSelect = (e) => {
    setSeleccionado(e.target.value);
  };

  const rangeStart = offset + 1;
  const rangeEnd = offset + pokemones.length;

  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>Selecciona un Pokemon</h1>
        <select className="m-3" onChange={handleSelect}>
          <option hidden>Selecciona un pokemon</option>
          {pokemones.map((pokemon) => {
            return (
              <option key={pokemon.id} value={pokemon.name}>
                {pokemones.indexOf(pokemon) + 1} -{" "}
                {pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
              </option>
            );
          })}
        </select>
        <button className="btn btn-secondary" onClick={irAPokemonDetalle}>
          Ver Detalle
        </button>
      </div>
      <br />
      <div className="pagination d-flex justify-content-center align-items-center">
        <button onClick={handlePrevPage} disabled={offset === 0}>
          Anterior
        </button>
        <span>{`${rangeStart}-${rangeEnd}`}</span>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
    </div>
  );
}

export default Pokemones;
