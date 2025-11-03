import "./NavBar.css"; 
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        🍲 Lo de Vivi Comida Casera
      </Link>

      <nav className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>

      <Link to="/cart" className="navbar-cart">
        <CartWidget /> <span>{totalItems}</span>
      </Link>
    </header>
  );
};

export default NavBar;
