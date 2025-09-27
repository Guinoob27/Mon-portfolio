import { useState } from 'react'
export default function Contact() {
  const [status, setStatus] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Message envoyé ! (Démo)')
    e.target.reset()
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Nom" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button className="btn">Envoyer</button>
      {status && <p>{status}</p>}
    </form>
  )
}