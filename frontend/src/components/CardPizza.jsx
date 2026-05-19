import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />

      <div className="card-body text-center">
        <h5 className="card-title text-capitalize">{pizza.name}</h5>

        <ul className="text-muted ps-3">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <p className="fw-bold">
          ${pizza.price.toLocaleString("es-CL")}
        </p>

        <div className="d-flex justify-content-between mt-3">
          <Link
            to={`/pizza/${pizza.id}`}
            className="btn btn-outline-secondary btn-sm w-50 me-2"
          >
            Ver más
          </Link>
          <button
            className="btn btn-dark btn-sm w-50"
            onClick={() => addToCart(pizza)}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;