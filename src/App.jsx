import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo-area">
          <img
            className="logo"
            src="https://res.cloudinary.com/doa9kh79y/image/upload/w_400/v1788771791/disco%20interno/logo/disco_interno_logo-1366x768px_i3gdii.png"
            alt="Disco Interno"
          />
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
              <p className="label-eyebrow">Disco Interno Apresenta</p>
              <h1 className="track-title">Morais Soares Groove</h1>
              <p className="artist-name">Iguana Garcia</p>
            </div>

            <div className="cta-group">
              <a href="https://distrokid.com/hyperfollow/iguanagarcia/morais-soares-groove" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Pre-Save</a>
              <a href="https://www.swisstransfer.com/dl/01a07b31-b27d-719f-8420-44434de503ee" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Download</a>
            </div>

            <div className="bio">
              <p>
                a <i>disco interno</i> apresenta uma edição limitada do 7"
                <br></br>
                <b>morais soares groove</b>
                <br></br>
                um beat jazz funk onde uma flauta distorcida vai crescendo até não caber dentro de si própria.
                dedicada aos ainda semi periféricos bairros das cidade.
                <br></br>
                não deixem lisboa morrer*
              </p>
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
