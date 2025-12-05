// src/components/ProductDetail.jsx
import { useParams, Link } from "react-router-dom"
import { PRODUCTS, ENTREPRENEURS } from "../data"

function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div style={{ padding: "var(--gap-3)" }}>
        <h1>Producto no encontrado</h1>
        <Link to="/" className="button">
          Volver al inicio
        </Link>
      </div>
    )
  }

  const owner = ENTREPRENEURS.find(e => e.id === product.entrepreneurId)

  return (
    <div style={{ padding: "var(--gap-3)" }}>
      <Link to="/" className="button" style={{ marginBottom: "var(--gap-3)" }}>
        ⟵ Volver
      </Link>

      <h1>{product.name}</h1>

      <section
        className="surface"
        style={{ padding: "var(--gap-3)", marginTop: "var(--gap-3)" }}
      >
        {/* 🔥 AQUÍ SE MUESTRA LA IMAGEN REAL DEL PRODUCTO */}
        <div className="product-media" style={{ marginBottom: "var(--gap-2)" }}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          ) : (
            <div className="img-placeholder" aria-hidden="true" />
          )}
        </div>

        <h2>Precio</h2>
        <p style={{ fontSize: "1.4rem", fontWeight: "600" }}>
          ${product.price} {product.currency}
        </p>

        <h2 style={{ marginTop: "var(--gap-3)" }}>Descripción</h2>
        <p className="muted">
          Descripción del producto próximamente. Este es un placeholder para la
          entrega del proyecto.
        </p>
      </section>

      <section
        className="surface"
        style={{ padding: "var(--gap-3)", marginTop: "var(--gap-3)" }}
      >
        <h2>Emprendedor</h2>

        {owner ? (
          <div>
            <p>
              <strong>{owner.brand}</strong> — {owner.name}
            </p>
            <p>{owner.city}</p>
            <p>Email: {owner.email}</p>
            <p>Teléfono: {owner.phone}</p>
          </div>
        ) : (
          <p className="muted">Emprendedor no encontrado.</p>
        )}
      </section>
    </div>
  )
}

export default ProductDetail
