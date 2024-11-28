import React from "react";
import Project from "c:/Users/nramo/onedrive/desktop/NancysReactPortfolio/src/components/Project";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      deployedLink: "https://deployed-link1.com",
      repoLink: "https://github.com/repo1",
      image: "path-to-image1.jpg", // Replace with actual image paths
    },
    {
      title: "Project 2",
      deployedLink: "https://deployed-link2.com",
      repoLink: "https://github.com/repo2",
      image: "path-to-image2.jpg",
    },
    {
      title: "Project 3",
      deployedLink: "https://deployed-link3.com",
      repoLink: "https://github.com/repo3",
      image: "path-to-image3.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list" style={{ display: "grid", gap: "20px" }}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;