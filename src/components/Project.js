import React from "react";

function Project({ title, deployedLink, repoLink, image }) {
  return (
    <div className="project">
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <h3>{title}</h3>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
}

export default Project;
