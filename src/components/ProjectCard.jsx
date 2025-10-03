import { Link } from "react-router-dom";

export default function ProjectCard({ id, image, title }) {
  return (
    <Link to={`/projects/${id}`} className="project-card" aria-label={title}>
      <img src={image} alt={title} className="project-card__img" />
    </Link>
  );
}
