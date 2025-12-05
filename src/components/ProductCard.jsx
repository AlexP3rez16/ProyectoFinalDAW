// Tarjeta reutilizable para mostrar un producto en listados y grids
import { Link } from "react-router-dom"
import { ENTREPRENEURS } from "../data"

function ProductCard({ product }) {
  // Buscamos quién es el emprendedor dueño del producto
  const owner = ENTREPRENEURS.find(e => e.id === product.entrepreneurId)

  return (
    // Cada tarjeta lleva a la vista de detalle del producto
    <Link to={`/producto/${product.id}`} className="surface product-card">
      <div className="product-media">
        {/* Si hay imagen, la mostramos; si no, usamos un placeholder */}
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="img-placeholder" aria-hidden="true" />
        )}
      </div>

      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>

        <div className="product-meta">
          <span>
            ${product.price} {product.currency}
          </span>
          {/* Mostramos la marca del emprendedor si existe */}
          {owner && <span>{owner.brand}</span>}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
