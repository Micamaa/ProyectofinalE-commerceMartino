import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-list-container">
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          nombre={product.nombre}
          descripcion={product.descripcion}
          precio={product.precio}
          imagen={product.imagen}
        />
      ))}
    </div>
  );
};

export default ItemList;
