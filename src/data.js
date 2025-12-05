// src/data.js
import mielImg from "./assets/miel.jpg";
import salsaAguacateImg from "./assets/salsa-aguacate.jpg";
import collarPerroImg from "./assets/collar-perro.webp";
import artesaniaBarroImg from "./assets/artesania-de-barro.webp";

// categorías principales
export const CATEGORIES = [
  {
    id: "hogar",
    name: "Hogar y Decoración",
    description: "Artículos para tu casa, decoración y regalos.",
  },
  {
    id: "alimentos",
    name: "Alimentos",
    description: "Productos comestibles hechos en Nuevo León.",
  },
  {
    id: "moda",
    name: "Moda y Accesorios",
    description: "Ropa, joyería y accesorios.",
  },
  {
    id: "mascotas",
    name: "Mascotas",
    description: "Productos para tus mascotas.",
  },
]

// emprendedores
export const ENTREPRENEURS = [
  {
    id: 1,
    name: "Juan Pérez",
    brand: "Artesanías Regias",
    city: "Monterrey, NL",
    email: "juan@artesaniasregias.mx",
    phone: "+52 81 1234 5678",
    categories: ["hogar", "moda"],
    bio: "Productos hechos a mano con materiales locales.",
  },
  {
    id: 2,
    name: "María López",
    brand: "Sabores del Cerro",
    city: "Santa Catarina, NL",
    email: "contacto@saboresdelcerro.mx",
    phone: "+52 81 2222 3344",
    categories: ["alimentos"],
    bio: "Salsas y mermeladas artesanales.",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    brand: "PetNL",
    city: "San Nicolás, NL",
    email: "hola@petnl.mx",
    phone: "+52 81 9876 5432",
    categories: ["mascotas"],
    bio: "Snacks y accesorios para mascotas.",
  },
]

// productos
export const PRODUCTS = [
  {
    id: 1,
    name: "Miel de abeja",
    price: 350,
    currency: "MXN",
    categoryId: "alimentos",
    entrepreneurId: 2,
    image: mielImg
  },
  {
    id: 2,
    name: "Salsa de aguacate",
    price: 520,
    currency: "MXN",
    categoryId: "alimentos",
    entrepreneurId: 2,
    image: salsaAguacateImg
  },
  {
    id: 3,
    name: "Artesanía de barro",
    price: 299,
    currency: "MXN",
    categoryId: "artesanias",
    entrepreneurId: 1,
    image: artesaniaBarroImg
  },
  {
    id: 4,
    name: "Collar para perro",
    price: 199,
    currency: "MXN",
    categoryId: "mascotas",
    entrepreneurId: 3,
    image: collarPerroImg
  }
];

