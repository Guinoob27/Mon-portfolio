import { useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <main className="container section"><p>Projet introuvable.</p></main>;
  }

  return (
    <main className="container section project-page">
      <h1 className="section__title">{project.title}</h1>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{ maxWidth: "100%", borderRadius: "12px", marginBottom: "1rem" }}
        />
      )}
      {project.description && <p>{project.description}</p>}
      <div className="card__links" style={{ display: "flex", gap: ".6rem", marginTop: "1rem" }}>
        {project.demo && (
          <a className="btn btn--sm" href={project.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        {project.repo && (
          <a className="btn btn--sm btn--outline" href={project.repo} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
      </div>
    </main>
  );
}
