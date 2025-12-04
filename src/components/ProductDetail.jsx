// src/components/ProductDetail.jsx
import { useParams } from "react-router-dom"
import { PRODUCTS, ENTREPRENEURS } from "../data"

function ProductDetail() {
  const { id } = useParams()
  const productId = Number(id)
  const product = PRODUCTS.find(p => p.id === productId)

  if (!product) {
    return <p>Producto no encontrado.</p>
  }

  const owner = ENTREPRENEURS.find(e => e.id === product.entrepreneurId)

  return (
    <>
      <section className="hero">
        <h1>{product.name}</h1>
        {owner && (
          <p>
            Hecho por <strong>{owner.brand}</strong> — {owner.city}
          </p>
        )}
      </section>

      <section className="surface" style={{ padding: "var(--gap-3)", marginTop: "var(--gap-3)" }}>
        <div className="product-media" style={{ marginBottom: "var(--gap-2)" }}>
          <div className="img-placeholder" aria-hidden="true" />
        </div>

        <h2>Precio</h2>
        <p style={{ fontSize: "1.4rem", fontWeight: "600" }}>
          ${product.price} {product.currency}
        </p>

        <h2 style={{ marginTop: "var(--gap-3)" }}>Descripción</h2>
        <p className="muted">
          Descripción pendiente. Este es un placeholder hasta que tengamos la ficha real.
        </p>
      </section>
    </>
  )
}

export default ProductDetail
