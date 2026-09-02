import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo-area">
          <div className="logo-placeholder">DISCO INTERNO</div>
        </div>
      </header>

      <main className="main">
        <div className="release-grid">
          <div className="artwork-col">
            <div className="artwork-placeholder">
              <span>Release Artwork</span>
            </div>
          </div>

          <div className="info-col">
            <div className="release-meta">
              <p className="label-eyebrow">Disco Interno Presents</p>
              <h1 className="track-title">Track Title</h1>
              <p className="artist-name">Artist Name</p>
            </div>

            <div className="cta-group">
              <a href="#" className="btn btn-primary">Pre-Save</a>
              <a href="#" className="btn btn-secondary">Download</a>
            </div>

            <div className="bio">
              <p>
                Bio text goes here. A short description of the artist or release
                — the story behind the music, the label, the moment. Keep it
                honest, keep it brief.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Disco Interno</p>
      </footer>
    </div>
  )
}

export default App
