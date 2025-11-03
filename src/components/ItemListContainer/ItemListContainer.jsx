import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    getDocs(productsCollection)
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            nombre: data.name,
            descripcion: data.description,
            precio: data.price,
            imagen: data.image
          };
        });
        setProducts(items);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos disponibles</p>;

  return <ItemList products={products} />;
};

export default ItemListContainer;
