// Listado de productos filtrados por la categoría "alimentos"
import { PRODUCTS } from "../data"
import ProductCard from "./ProductCard"

function CategoriaAlimentos() {
  // Filtramos solo los productos que pertenecen a la categoría "alimentos"
  const alimentos = PRODUCTS.filter(p => p.categoryId === "alimentos")

  return (
    <>
      <section className="hero">
        <h1>Alimentos</h1>
        <p>Productos comestibles hechos en Nuevo León.</p>
      </section>

      <section>
        <h2 className="section-title">Productos</h2>
        <div className="products-grid">
          {/* Pintamos cada producto de alimentos con la misma tarjeta reutilizable */}
          {alimentos.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  )
}

export default CategoriaAlimentos
