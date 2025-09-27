export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="logo" href="#hero">Guillaume</a>
        <nav>
          <ul className="nav">
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}