import { Route, Routes } from "react-router-dom";
import NavbarPokemon from "./components/NavbarPokemon";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import DetallePokemon from "./views/DetallePokemon";
import NotFound from "./views/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <NavbarPokemon />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<DetallePokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
