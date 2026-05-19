import { Link } from "react-router-dom";
import gato from "../assets/gato1.png";

const NotFound = () => {
  return (
    <div className="container mt-5 text-white text-center">
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">

        <img
          src={gato}
          alt="gato triste"
          style={{
            width: "300px",
            borderRadius: "12px",
          }}
        />

        <div style={{ maxWidth: "400px", textAlign: "left" }}>
          <h1 className="display-1 fw-bold mb-3 text-white">Error 404</h1>
            <h2 className="mb-3 text-white text-center">Esta página no existe, el horno explotó 💀</h2>
              <p className ="text-center"> y... se quemó la pizza 😿</p>
        </div>
      </div>

      <div className="mt-5">
        <Link to="/" className="btn btn-warning px-4 py-2">
          Volver al inicio 🍕
        </Link>
      </div>

    </div>
  );
};

export default NotFound;