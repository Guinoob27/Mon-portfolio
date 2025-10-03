export default function Hero() {
  // Utilise une image locale si présente, sinon un placeholder en ligne
  let src = "https://picsum.photos/seed/profile/300/300";
  try {
    // Cette import dynamique échouera si le fichier n'existe pas, on garde alors le placeholder
    src = new URL("../assets/Moi.webp", import.meta.url).href;
  } catch (e) {}

  return (
    <div className="hero">
      <img className="hero__avatar" src={src} alt="Portrait" />
      <div className="hero__text">
        <h1>Salut, je suis <span className="accent">Guillaume MARTIN</span>.</h1>
        <p>Développeur front-end ...............</p>
        <div className="hero__cta">
          <a className="btn" href="#projects">Voir mes projets</a>
          <a className="btn btn--outline" href="#contact">Me contacter</a>
        </div>
      </div>
    </div>
  )
}