import { useState } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product, onAdd }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAdd(quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="item-detail-container">
      <img src={product.imagen} alt={product.nombre} className="item-detail-image" />
      <div className="item-detail-info">
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <p className="item-detail-price">${product.precio}</p>
        <div className="item-detail-actions">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button onClick={handleAddToCart}>Añadir al carrito</button>
        </div>
        {added && <div className="added-message">¡Producto agregado!</div>}
      </div>
    </div>
  );
};

export default ItemDetail;
