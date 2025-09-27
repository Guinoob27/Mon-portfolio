export default function ThemeToggle({ theme, setTheme }) {
  const next = theme === 'light' ? 'dark' : 'light'
  return (
    <button className="theme-toggle" onClick={() => setTheme(next)}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}