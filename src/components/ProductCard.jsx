// src/components/ProductCard.jsx
import { Link } from "react-router-dom"
import { ENTREPRENEURS } from "../data"

function ProductCard({ product }) {
  const owner = ENTREPRENEURS.find(e => e.id === product.entrepreneurId)

  return (
    <Link to={`/producto/${product.id}`} className="surface product-card">
      <div className="product-media">
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
          {owner && <span>{owner.brand}</span>}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
