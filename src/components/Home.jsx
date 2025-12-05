// Página de inicio: muestra buscador, categorías y algunos productos destacados
import { CATEGORIES, PRODUCTS } from "../data"
import CategoryCard from "./CategoryCard"
import ProductCard from "./ProductCard"

function Home() {
  // Tomamos solo los primeros 3 productos como destacados
  const destacados = PRODUCTS.slice(0, 3)

  return (
    <>
      <section className="hero">
        <h1>Productos locales, calidad real</h1>
        <p>Explora el ecosistema emprendedor de Nuevo León.</p>
      </section>

      {/* Buscador (por ahora solo visual, sin lógica de filtrado) */}
      <section className="search">
        <form role="search">
          <label className="visually-hidden" htmlFor="q">
            Buscar productos
          </label>
          <input id="q" type="search" placeholder="Buscar artesanías, alimentos…" />
          <button type="submit">Buscar</button>
        </form>
      </section>

      <section>
        <h2 className="section-title">Categorías</h2>
        <div className="categories-grid">
          {/* Pintamos todas las categorías y solo a "alimentos" le damos ruta específica */}
          {CATEGORIES.map(cat => (
            <CategoryCard
              key={cat.id}
              category={cat}
              to={cat.id === "alimentos" ? "/categoria/alimentos" : undefined}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Destacados</h2>
        <div className="products-grid">
          {destacados.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
