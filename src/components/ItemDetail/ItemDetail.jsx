import { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product, onAdd }) => {
  const [added, setAdded] = useState(false);


  const handleAddToCart = (quantity) => {
    onAdd(quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail-container">
      <img
        src={product.image}
        alt={product.name}
        className="item-detail-image"
      />

      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="item-detail-price">${product.price}</p>

        {!added ? (
          <ItemCount
            stock={product.stock || 10} 
            initial={1}
            onAdd={handleAddToCart}
          />
        ) : (
          <div className="added-message">¡Producto agregado!</div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
