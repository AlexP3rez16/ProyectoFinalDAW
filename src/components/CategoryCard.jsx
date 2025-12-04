// src/components/CategoryCard.jsx
import { Link } from "react-router-dom"

function CategoryCard({ category, to }) {
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
