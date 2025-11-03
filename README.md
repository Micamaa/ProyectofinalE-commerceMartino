# lodevivicomidacaseraemprendiendo

## Descripción del Proyecto

Este proyecto es un e-commerce de **Comidas Caseras**, desarrollado con **React** y **Firebase**. La aplicación permite a los usuarios navegar por un catálogo de productos, ver detalles de cada producto, agregar productos al carrito y realizar compras, generando un registro en Firestore.

Los productos se gestionan dinámicamente desde **Firebase Firestore**, y el estado del carrito se maneja mediante **React Context**. La interfaz utiliza **CSS** para el estilado y React Router para la navegación entre secciones.

---

## Tecnologías Utilizadas

- **React** (SPA)
- **React Router** (Navegación)
- **Firebase Firestore** (Base de datos)
- **CSS** (Estilos)
- **React Context** (Gestión de estado del carrito)

---

## Funcionalidades

1. **Listado de Productos**
   - Se muestran dinámicamente desde Firestore.
   - Cada producto incluye: imagen, nombre, descripción y precio.
   - Botón para ver detalle del producto.

2. **Detalle de Producto**
   - Imagen del producto.
   - Nombre, descripción y precio.
   - Selección de cantidad mediante `ItemCount`.
   - Botón "Añadir al carrito" con confirmación visual de agregado.

3. **Carrito de Compras**
   - Visualización de productos agregados con subtotal y total.
   - Posibilidad de eliminar productos.
   - Icono de carrito con total de unidades.

4. **Checkout**
   - Formulario de compra para registrar los datos del usuario.
   - Generación de un documento en Firestore con la orden y su ID.

5. **Navegación**
   - SPA sin recargas de página.
   - Rutas: Inicio, Categorías, Detalle, Carrito, Checkout.

---

## Estructura de Carpetas

lodevivicomidacaseraemprendiendo/
│
├─ package.json
├─ README.md
├─ /public
│ └─ index.html
│
├─ /src
│ ├─ index.js
│ ├─ App.js
│ ├─ /firebase
│ │ └─ config.js
│ ├─ /context
│ │ └─ CartContext.js
│ ├─ /components
│ │ ├─ Cart/
│ │ │ └─ Cart.jsx
│ │ ├─ CartItem/
│ │ │ └─ CartItem.jsx
│ │ ├─ CartWidget/
│ │ │ └─ CartWidget.jsx
│ │ ├─ CheckoutForm/
│ │ │ └─ CheckoutForm.jsx
│ │ ├─ Item/
│ │ │ ├─ Item.jsx
│ │ │ └─ Item.css
│ │ ├─ ItemCount/
│ │ │ └─ ItemCount.jsx
│ │ ├─ ItemDetail/
│ │ │ ├─ ItemDetail.jsx
│ │ │ └─ ItemDetail.css
│ │ └─ ItemList/
│ │ └─ ItemList.jsx
│ └─ /containers
│ ├─ ItemListContainer.jsx
│ └─ ItemDetailContainer.jsx

## Autor

- **Nombre:** [Micaela 
- **Apellido:** Martino  
- **Tema del proyecto:** Comidas Caseras  
- **Descripción corta:** Emprendimiento de comidas caseras hechas con amor y entusiasmo, con productos premium y hogareños.  

## Cómo Ejecutar el Proyecto

1. Clonar el repositorio:  
   git clone https://github.com/TU_USUARIO/lodevivicomidacaseraemprendiendo.git

2. Instalar dependencias:  
   npm install

3. Iniciar la aplicación en modo desarrollo:  
   npm start

La aplicación se abrirá en http://localhost:3000/.

## Observaciones

- SPA sin recargas de página.
- Renderizado condicional para loaders y mensajes.
- Manejo del carrito mediante React Context.
- Conexión dinámica a Firestore para productos y registros de compras.
