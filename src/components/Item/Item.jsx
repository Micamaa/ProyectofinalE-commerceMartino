import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, description, price, image }) => {
  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <Link to={`/productos/${id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
};

export default Item;
