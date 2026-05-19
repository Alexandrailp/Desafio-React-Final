import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import pizzaDefault from "../assets/pizza-default.jpg";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data));
  }, [id]);

  if (!pizza) return <p className="text-white text-center mt-5">Cargando...</p>;

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            flex: "1 1 500px",
            minWidth: "320px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <img
            src={pizza.img}
            alt={pizza.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = pizzaDefault;
            }}
            style={{
              width: "100%",
              height: "100%",
              minHeight: "420px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div
          style={{
            flex: "1 1 500px",
            minWidth: "320px",
            padding: "32px",
            color: "#212529",
          }}
        >
          <h2
            style={{
              textTransform: "capitalize",
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: "1px solid #ddd",
              color: "#212529",
            }}
          >
            {pizza.name}
          </h2>

          <p style={{ marginBottom: "24px", lineHeight: "1.6" }}>
            {pizza.desc}
          </p>

          <h5 style={{ marginBottom: "12px" }}>Ingredientes:</h5>

          <ul style={{ paddingLeft: "20px", marginBottom: "24px" }}>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} style={{ marginBottom: "6px" }}>
                {ingredient}
              </li>
            ))}
          </ul>

          <h4 style={{ marginBottom: "20px" }}>
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </h4>

          <button
            className="btn btn-dark"
            onClick={() => addToCart(pizza)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;