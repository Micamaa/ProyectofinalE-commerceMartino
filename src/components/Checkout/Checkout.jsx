import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const order = {
      buyer,
      items: cart,
      total: getTotalPrice(),
      date: serverTimestamp()
    };
    const docRef = await addDoc(ordersCollection, order);
    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return (
      <div className="checkout-container">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu orden se generó con el ID: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
