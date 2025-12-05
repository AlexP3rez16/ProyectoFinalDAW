// Tarjeta genérica para mostrar una categoría (con o sin link)
import { Link } from "react-router-dom"

function CategoryCard({ category, to }) {
  // Si viene la prop "to", usamos Link, si no, solo un article estático
  const Wrapper = to ? Link : "article"
  const wrapperProps = to ? { to } : {}

  return (
    <Wrapper className="surface category-card" {...wrapperProps}>
      <div className="category-title">{category.name}</div>
      <div className="category-desc">{category.description}</div>
    </Wrapper>
  )
}

export default CategoryCard
