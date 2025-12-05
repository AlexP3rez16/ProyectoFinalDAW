// Tarjeta individual para mostrar la info de un emprendedor
function EntrepreneurCard({ entrepreneur }) {
  return (
    <article className="surface entrepreneur-card">
      {/* Avatar del emprendedor */}
      <div className="entrepreneur-avatar">
        <img
          src={entrepreneur.image}
          alt={entrepreneur.name}
          className="avatar-img"
        />
      </div>

      {/* Datos básicos del emprendedor y su marca */}
      <div className="entrepreneur-body">
        <h3>{entrepreneur.name}</h3>
        <p className="muted">{entrepreneur.brand}</p>
        <p className="muted">{entrepreneur.city}</p>
        <p className="muted">{entrepreneur.bio}</p>
      </div>
    </article>
  )
}

export default EntrepreneurCard
