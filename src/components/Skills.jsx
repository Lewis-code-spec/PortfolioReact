import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: '.NET Core', level: 80 },
        { name: 'C#', level: 80 },
        { name: 'ASP.NET Web API', level: 70 },
        { name: 'Entity Framework', level: 75 },
        { name: 'SQL Server', level: 90 },
        { name: 'Azure', level: 50 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 50 },
        { name: 'JavaScript', level: 45 },
        { name: 'TypeScript', level: 30 },
        { name: 'HTML5', level: 85 },
        { name: 'CSS3', level: 80 },
        { name: 'Bootstrap', level: 70 }
      ]
    },
    {
      title: 'Blazor Development',
      icon: '⚡',
      skills: [
        { name: 'Blazor Server', level: 70 },
        { name: 'Blazor WebAssembly', level: 60 },
        { name: 'Blazor Components', level: 65 },
        { name: 'SignalR', level: 50 },
        { name: 'MudBlazor', level: 55 },
        { name: 'Blazorise', level: 45 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 75 },
        { name: 'Docker', level: 20 },
        { name: 'Visual Studio', level: 85 },
        { name: 'VS Code', level: 80 },
        { name: 'Postman', level: 70 },
        { name: 'Swagger', level: 65 }
      ]
    }
  ]

  const certifications = [
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2023',
      credential: 'AZ-900'
    },
    {
      name: 'Microsoft Certified: .NET Fundamentals',
      issuer: 'Microsoft',
      year: '2022',
      credential: '98-361'
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3 className="certifications-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-header">
                  <h4 className="cert-name">{cert.name}</h4>
                  <span className="cert-year">{cert.year}</span>
                </div>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-credential">Credential ID: {cert.credential}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-timeline">
          <h3 className="timeline-title">Professional Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Junior Developer</h4>
                <p className="timeline-company">Adaro Optics Ltd</p>
                <p className="timeline-period">2022 - Present</p>
                <p className="timeline-description">
                  Developing web applications and software solutions using .NET Core, Blazor, and React. 
                  Working on optical systems software and contributing to full-stack development projects.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Support Engineer</h4>
                <p className="timeline-company">Adaro Optics Ltd</p>
                <p className="timeline-period">2020 - 2022</p>
                <p className="timeline-description">
                  Provided technical support for optical systems and software. Gained deep understanding 
                  of customer needs and technical requirements that later informed my development work.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Support Engineer</h4>
                <p className="timeline-company">Capita</p>
                <p className="timeline-period">2018 - 2020</p>
                <p className="timeline-description">
                  Started my technical career providing support services. Developed strong problem-solving 
                  skills and customer service experience that became the foundation for my development career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
