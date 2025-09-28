import './About.css'

const About = () => {
  const technologies = [
    { name: '.NET Core', level: 80 },
    { name: 'C#', level: 80 },
    { name: 'Blazor', level: 80 },
    { name: 'React', level: 50 },
    { name: 'JavaScript', level: 45 },
    { name: 'TypeScript', level: 30 },
    { name: 'SQL Server', level: 90 },
    { name: 'Entity Framework', level: 75 },
    { name: 'Azure', level: 50 },
    { name: 'Docker', level: 20 }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>I'm a passionate Junior Full-Stack Developer</h3>
              <p>
                With 2 years of development experience and 4 years in technical support, I bring a 
                unique perspective to software development. My background in support engineering 
                has given me deep insights into user needs and real-world application challenges.
              </p>
              <p>
                I specialize in building web applications using .NET Core, Blazor, and React. 
                My support background has taught me the importance of user-friendly interfaces 
                and robust error handling, which I apply to every project I work on.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div>
                  <h4>Performance Focused</h4>
                  <p>Optimizing applications for speed and efficiency</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔧</div>
                <div>
                  <h4>Problem Solver</h4>
                  <p>Finding creative solutions to complex challenges</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">📚</div>
                <div>
                  <h4>Continuous Learning</h4>
                  <p>Always exploring new technologies and methodologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3>Technical Proficiency</h3>
            <div className="skills-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{tech.name}</span>
                    <span className="skill-percentage">{tech.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">6+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Years Development</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Years Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Completed Projects</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
