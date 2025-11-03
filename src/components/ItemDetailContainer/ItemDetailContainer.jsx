import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productRef = doc(db, "products", id);
    getDoc(productRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProduct({ 
            id: docSnap.id,
            nombre: data.name,
            descripcion: data.description,
            precio: data.price,
            imagen: data.image
          });
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleAdd = (quantity) => {
    addToCart({ ...product, quantity });
  };

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return <ItemDetail product={product} onAdd={handleAdd} />;
};

export default ItemDetailContainer;
