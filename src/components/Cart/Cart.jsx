import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, getTotal, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) return <p>El carrito está vacío</p>;

  return (
    <div className="cart-container">
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <img src={product.image} alt={product.name} className="cart-item-image" />
          <div className="cart-item-info">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Precio unitario: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Subtotal: ${product.price * product.quantity}</p>
            <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <h3>Total: ${getTotal()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
