import { useState } from 'react'
import './App.css'

const content = {
  pt: {
    eyebrow: 'Disco Interno Apresenta',
    listenBtn: 'Ouve Aqui',
    bio: (
      <>
        a <i>disco interno</i> apresenta uma edição limitada do 7"
        <br />
        <b>morais soares groove</b>
        <br />
        um beat jazz funk onde uma flauta distorcida vai crescendo até não caber dentro de si própria.
        dedicada aos ainda semi periféricos bairros das cidade.
        <br />
        não deixem lisboa morrer*
      </>
    ),
  },
  en: {
    eyebrow: 'Disco Interno Presents',
    listenBtn: 'Listen Now',
    bio: (
      <>
        <i>disco interno</i> presents a limited edition 7"
        <br />
        <b>morais soares groove</b>
        <br />
        a jazz funk beat where a distorted flute keeps growing until it can no longer contain itself.
        dedicated to the still semi-peripheral neighbourhoods of the city.
        <br />
        don't let lisbon die*
      </>
    ),
  },
}

function App() {
  const [lang, setLang] = useState('pt')
  const t = content[lang]

  return (
    <div className="page">
      <header className="header">
        <div className="header-spacer" />
        <div className="logo-area">
          <img
            className="logo"
            src="https://res.cloudinary.com/doa9kh79y/image/upload/w_400/v1788771791/disco%20interno/logo/disco_interno_logo-1366x768px_i3gdii.png"
            alt="Disco Interno"
          />
        </div>
        <div className="lang-toggle">
          <button
            className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
            onClick={() => setLang('pt')}
          >PT</button>
          <span className="lang-sep">/</span>
          <button
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >EN</button>
        </div>
      </header>

      <main className="main">
        <div className="release-grid">
          <div className="artwork-col">
            <img
              className="artwork"
              src="https://res.cloudinary.com/doa9kh79y/image/upload/w_840,h_840,c_fill/v1788772176/disco%20interno/covers/morais%20soares%20groove/cover_aw7fem.jpg"
              alt="Morais Soares Groove cover art"
            />
          </div>

          <div className="info-col">
            <div className="release-meta">
              <p className="label-eyebrow">{t.eyebrow}</p>
              <h1 className="track-title">Morais Soares Groove</h1>
              <p className="artist-name">Iguana Garcia</p>
            </div>

            <div className="cta-group">
              <a href="https://distrokid.com/hyperfollow/iguanagarcia/morais-soares-groove" className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t.listenBtn}</a>
              <a href="https://www.swisstransfer.com/dl/01a07b31-b27d-719f-8420-44434de503ee" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Download</a>
            </div>

            <div className="bio">
              <p>{t.bio}</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Disco Interno</p>
      </footer>
    </div>
  )
}

export default App
