# Proyecto “Hecho en Nuevo León”

La idea de este proyecto fue crear una página que promueva productos hechos en Nuevo León y al mismo tiempo dar visibilidad a los emprendedores locales.  
Buscamos que el diseño se sintiera cálido, limpio y fácil de usar, que cualquier persona pudiera navegar sin confundirse. Desde el principio pensamos en que fuera algo visualmente atractivo, pero sin perder la sencillez que tienen los productos artesanales.

---

### 🎨 Paleta de colores seleccionada
Para el diseño usamos una combinación de tonos cálidos. El color principal es **naranja (#ff7a00)** porque transmite energía y creatividad, además de representar bien lo local y artesanal.  
El fondo es **blanco** para mantener limpieza visual y resaltar los productos, y usamos un **beige claro (#fff7f0)** en las tarjetas o superficies para dar sensación de calidez.  
Los textos van en **gris oscuro (#1a1a1a)** y el secundario en **gris claro (#6b6b6b)** para no cansar la vista. En general, quisimos que los colores se sintieran naturales y que el sitio no pareciera saturado.

---

### 🧭 Justificación de la estructura de navegación
La estructura de las páginas se pensó para que el usuario pueda moverse fácilmente.  
Desde la página **Inicio** se puede acceder a las **categorías**, **productos destacados** y también buscar directamente.  
Cuando se entra a una **categoría**, aparecen los productos relacionados con la posibilidad de filtrarlos o buscar algo específico.  
Cada **producto** tiene su propia página donde se muestran los detalles y el enlace al **emprendedor**, que también tiene su propio perfil con su información de contacto y más productos.  
Con esta estructura se logra una navegación fluida, donde todo está conectado sin que el usuario tenga que regresar al inicio constantemente.

---

### 🗂️ Diagrama de la jerarquía de páginas

```
Inicio
│
├── Categoría
│     ├── Producto
│     │     └── Emprendedor
│     └── Más productos...
│
└── Contacto / Información general
```

---

### 👥 Integrantes del equipo

- Jesús Alejandro Pérez Rodríguez — 628444  
- Gabriel Ortiz Sepúlveda — 638222  
- Manuel Bonavena — 625440  
- Adrián Vázquez — 625860  

##Descripción técnica de los componentes
App.jsx

Define las rutas principales y mantiene el <Navbar /> visible en todo el sitio.

Navbar.jsx

Menú de navegación con enlaces a Inicio, Alimentos y Emprendedores.

Home.jsx

Página principal con hero, categorías, buscador visual y productos destacados.

CategoriaAlimentos.jsx

Filtra productos cuyo categoryId === "alimentos" y los muestra con ProductCard.

ProductCard.jsx

Tarjeta que muestra imagen, nombre, precio y marca del emprendedor.
Cada tarjeta lleva al detalle del producto.

ProductDetail.jsx

Muestra la información individual de cada producto, incluyendo su emprendedor.

Emprendedores.jsx y EntrepreneurCard.jsx

Lista de emprendedores + tarjetas individuales con foto, marca, ciudad y bio.

🚧 Mejoras futuras

Buscador funcional.

Más categorías además de alimentos.

Conectar los datos a un backend real.

Panel de administración para emprendedores.

Paginación real y filtros avanzados.

## 🧱 Stack tecnológico

- **Framework:** React  
- **Dev Server / Bundler:** Vite  
- **Routing:** `react-router-dom`  
- **Linting:** ESLint con reglas para React y Hooks  
- **Estilos:** CSS modular mediante clases globales  
- **Dataset:** Datos mock de productos y emprendedores en `data.js`
