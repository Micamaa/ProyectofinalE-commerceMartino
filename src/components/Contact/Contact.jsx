import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>Para consultas, pedidos o sugerencias, contáctanos por:</p>
      <ul>
        <li>Email: contacto@lodevivi.com</li>
        <li>Teléfono: +54 9 11 1234-5678</li>
        <li>Dirección: Av. Comida Casera 123, Ciudad</li>
      </ul>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
