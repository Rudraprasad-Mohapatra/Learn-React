import "./App.css";
import CustomRoutes from "./routes/CustomRoutes";
import { Link } from "react-router-dom";
function App() {

  return (
    <div className="outerPokedex">
    <Link to="/">
      <h1 id="pokedex-heading">Pokedex</h1>
      </Link>
      <CustomRoutes />
    </div>
  )
}

export default App
