import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, descripcion, precio, imagen }) => {
  return (
    <div className="item-card">
      <img src={imagen} alt={nombre} className="item-image" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>${precio}</p>
      <Link to={`/productos/${id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
};

export default Item;
