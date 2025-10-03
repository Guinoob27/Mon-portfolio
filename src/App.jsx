import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Footer from './components/Footer.jsx'
import projects from './data/projects.js'
import ThemeToggle from './components/ThemeToggle.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Header />
      <main>
        <section id="hero" className="container">
          <Hero />
        </section>
        <section id="about" className="container section">
          <h2 className="section__title">À propos</h2>
          <p>Je suis développeur front-end passionné par les interfaces propres et accessibles.</p>
        </section>
        <section id="projects" className="container section">
          <h2 className="section__title">Projets</h2>
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </section>
        
        
      </main>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Footer />
    </>
  )
}