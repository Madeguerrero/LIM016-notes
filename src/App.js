import { Link } from "react-router-dom";
import imagenes from "./assets/imagenes";

export default function App() {
  return (
    <div>
      <img src={imagenes[0]} />
      <h1>Quick Notes</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> | <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
