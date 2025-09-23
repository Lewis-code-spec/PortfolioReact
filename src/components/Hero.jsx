import './Hero.css'

const Hero = ({ onNavigate }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Your Name</span>
            </h1>
            <h2 className="hero-subtitle">
              Junior Full-Stack Developer
            </h2>
            <p className="hero-description">
              I specialize in building modern web applications using .NET, Blazor, and React. 
              With a background in technical support, I bring a unique user-focused perspective 
              to development, creating solutions that truly meet real-world needs.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => onNavigate('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => onNavigate('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="tech-stack">
              <div className="tech-item">
                <div className="tech-icon">.NET</div>
                <span>.NET Core</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">Blazor</div>
                <span>Blazor</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">React</div>
                <span>React</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">C#</div>
                <span>C#</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">JS</div>
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">SQL</div>
                <span>SQL Server</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow" onClick={() => onNavigate('about')}>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
