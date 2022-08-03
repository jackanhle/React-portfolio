import React from "react";


function Project({ project }) {
 
  return (
    <div className="col-md-4 col-portfolio portfolio-item">
      <div className="portfolio-wrapper">
        <div className="portfolio-thumb">
          <img src={project.image} alt={project.imageAlt} />
          <div className="view-icon">
            <a href={project.github} target="_blank" rel="noreferrer">
              Repo
            </a>
          </div>
        </div>
        <div className="portfolio-name text-left">
          <h4>
            <a href={project.preview} target="_blank" rel="noreferrer">
              {project.title}
            </a>
          </h4>
          <div className="portfolio-link">
            <p>
              <a href={project.link} target="_blank" rel="noreferrer">
                Link to the Project
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;