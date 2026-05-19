import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-3">
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
        <span className="navbar-brand">🍕 Mamma Mia</span>
      </Link>

      <div>
        <Link className="btn btn-outline-light me-2" to="/">
          Home
        </Link>

        {token ? (
          <>
            <Link className="btn btn-outline-light me-2" to="/profile">
              <i className="fa-solid fa-user"></i>
            </Link>

            <button
              className="btn btn-outline-light me-2"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light me-2" to="/login">
              Login
            </Link>

            <Link className="btn btn-outline-light me-2" to="/register">
              Register
            </Link>
          </>
        )}

        <Link className="btn btn-warning" to="/cart">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;