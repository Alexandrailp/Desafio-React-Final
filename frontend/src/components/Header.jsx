import headerImg from "../assets/Header.jpg";

const Header = () => {
  return (
    <header
      className="hero d-flex align-items-center justify-content-center text-white"
      style={{
        backgroundImage: `url(${headerImg})`,
      }}
    >
      <div className="text-center">
        <h1 className="display-4 fw-bold">¡Pizzería Mamma Mia!</h1>
        <p className="lead">Las mejores pizzas que podrás encontrar 🍕</p>
      </div>
    </header>
  );
};

export default Header;