import projectsData from './assets/projects.json';

function Projects() {
  return (
    
    <div className="Projects container mt-5">
      <h2 className="mb-4">Sample Projects 🚀</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card project-card h-100">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="badge project-badge me-1" key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;