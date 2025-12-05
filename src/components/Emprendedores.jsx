// Página que lista a todos los emprendedores registrados en el dataset
import { ENTREPRENEURS } from "../data"
import EntrepreneurCard from "./EntrepreneurCard"

function Emprendedores() {
  return (
    <>
      <section className="hero">
        <h1>Emprendedores</h1>
        <p>Personas detrás de los proyectos hechos en Nuevo León.</p>
      </section>

      <section>
        <h2 className="section-title">Todos los emprendedores</h2>
        <div className="entrepreneurs-grid">
          {/* Recorremos el arreglo y usamos la tarjeta de emprendedor para cada uno */}
          {ENTREPRENEURS.map(e => (
            <EntrepreneurCard key={e.id} entrepreneur={e} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Emprendedores
