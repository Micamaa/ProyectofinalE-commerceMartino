import { useState } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product, onAdd }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAdd(quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail-container">
      <img src={product.image} alt={product.name} className="item-detail-image" />

      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="item-detail-price">${product.price}</p>

        {!added ? (
          <div className="item-detail-actions">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button onClick={handleAddToCart}>Añadir al carrito</button>
          </div>
        ) : (
          <div className="added-message">¡Producto agregado!</div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
