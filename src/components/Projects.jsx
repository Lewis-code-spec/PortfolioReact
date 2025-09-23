import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = []

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'blazor', label: 'Blazor' },
    { id: 'react', label: 'React' },
    { id: 'backend', label: 'Backend' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and side projects</p>
        </div>

        {projects.length > 0 && (
          <div className="project-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>Live Demo</span>
                      </a>
                      <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <div className="no-projects-icon">🚀</div>
            <h3>Projects Coming Soon</h3>
            <p>
              I'm currently working on some exciting projects that I'll be adding here soon. 
              In the meantime, feel free to check out my GitHub profile or get in touch to discuss potential collaborations!
            </p>
            <div className="no-projects-actions">
              <button 
                className="btn btn-primary"
                onClick={() => window.open('https://github.com/lewis-code-spec', '_blank')}
              >
                View GitHub Profile
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
