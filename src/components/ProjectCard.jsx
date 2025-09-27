export default function ProjectCard({ title, description, tags, image, repo, demo }) {
  return (
    <article className="card">
      {image && (
        <a href={demo || repo} target="_blank" rel="noreferrer">
          <img className="card__img" src={image} alt={title} loading="lazy" />
        </a>
      )}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
        {tags?.length > 0 && (
          <ul className="tags">
            {tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
        )}
        <div className="card__links">
          {demo && <a className="btn btn--sm" href={demo} target="_blank" rel="noreferrer">Demo</a>}
          {repo && <a className="btn btn--sm btn--outline" href={repo} target="_blank" rel="noreferrer">Code</a>}
        </div>
      </div>
    </article>
  )
}