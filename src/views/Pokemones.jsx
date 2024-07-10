import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const POKES_URL = "https://pokeapi.co/api/v2/pokemon?limit=10000";

function Pokemones() {
  const [lista, setLista] = useState([]);
  const [seleccionado, setSeleccionado] = useState();
  const navigate = useNavigate;

  const setActiveClass = ({ isActive }) =>
    isActive ? "active text-decoration-none p-3" : undefined;

  const obtenerPokemones = async () => {
    const respuesta = await fetch(POKES_URL);
    const datos = await respuesta.json();
    setLista(datos.results);
  };

  console.log("lista-->", lista);
  console.log("setLista-->", setLista);

  const irAPokemonDetalle = () => {
    if (seleccionado) {
      navigate(`/pokemones/${seleccionado}`);
    } else {
      alert("Debes seleccionar un pokemon");
    }
  };

  useEffect(() => {
    obtenerPokemones();
  }, []);

  const handleSelect = (e) => {
    setSeleccionado(e.target.value);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1>Selecciona un Pokemon</h1>
      <select className="m-3" onChange={handleSelect}>
        <option hidden>Selecciona un pokemon</option>
        {lista.map((item) => {
          return (
            <option key={item.id} value={item.name}>
              {lista.indexOf(item) + 1} -{" "}
              {item.name[0].toUpperCase() + item.name.substr(1)}
            </option>
          );
        })}
      </select>
      <button className="btn btn-secondary" onClick={irAPokemonDetalle}>
        <NavLink className={setActiveClass} to={"pokemones/"}>
          Ver Detalle
        </NavLink>
      </button>
    </div>
  );
}

export default Pokemones;
