import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos">Volver a productos</Link>
      </div>
    );

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
          <div>
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>
              {item.quantity} x ${item.precio} = ${item.quantity * item.precio}
            </p>
          </div>
        </div>
      ))}

      <h3>Total: ${getTotalPrice()}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
